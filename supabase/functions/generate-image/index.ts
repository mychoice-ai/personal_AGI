import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';
import { HfInference } from 'https://esm.sh/@huggingface/inference@2.3.2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, style = 'realistic' } = await req.json();
    
    const authHeader = req.headers.get('Authorization')!;
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      return new Response('Unauthorized', { status: 401, headers: corsHeaders });
    }

    const hf = new HfInference(Deno.env.get('HUGGING_FACE_ACCESS_TOKEN'));

    // Enhance prompt based on style
    const stylePrompts = {
      realistic: 'photorealistic, high quality, detailed',
      artistic: 'artistic style, creative, expressive',
      minimal: 'minimalist, clean, simple design',
      health: 'health and wellness themed, professional medical illustration'
    };

    const enhancedPrompt = `${prompt}, ${stylePrompts[style] || stylePrompts.realistic}`;

    console.log('Generating image with prompt:', enhancedPrompt);

    const image = await hf.textToImage({
      inputs: enhancedPrompt,
      model: 'black-forest-labs/FLUX.1-schnell',
    });

    // Convert to base64
    const arrayBuffer = await image.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    const imageData = `data:image/png;base64,${base64}`;

    // Optional: Store image generation record
    const { error: logError } = await supabaseClient
      .from('ai_responses')
      .insert({
        user_id: user.id,
        query: `Image: ${prompt}`,
        response: 'Image generated successfully',
        category: 'creative',
        confidence_score: 0.95,
        model_used: 'FLUX.1-schnell'
      });

    if (logError) {
      console.error('Failed to log image generation:', logError);
    }

    return new Response(
      JSON.stringify({ 
        image: imageData,
        prompt: enhancedPrompt,
        style,
        model: 'FLUX.1-schnell'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-image function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate image', 
        details: error.message 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});