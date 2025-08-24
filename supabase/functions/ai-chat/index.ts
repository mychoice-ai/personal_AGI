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
    const { message, category = 'general', personality = 'friendly' } = await req.json();
    
    const authHeader = req.headers.get('Authorization')!;
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    // Get user from auth token
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      return new Response('Unauthorized', { status: 401, headers: corsHeaders });
    }

    const hf = new HfInference(Deno.env.get('HUGGING_FACE_ACCESS_TOKEN'));

    // System prompts based on category and personality
    const systemPrompts = {
      health: 'You are an AI health assistant. Provide helpful health and wellness advice.',
      productivity: 'You are an AI productivity coach. Help users optimize their workflow and habits.',
      creative: 'You are an AI creative assistant. Help users with creative projects and brainstorming.',
      planning: 'You are an AI planning assistant. Help users organize and structure their goals.',
      general: 'You are AGI Misao, a helpful AI assistant focused on health and productivity.'
    };

    const personalityStyles = {
      formal: 'Respond in a professional, formal tone.',
      casual: 'Respond in a casual, relaxed tone.',
      friendly: 'Respond in a warm, friendly, and encouraging tone.'
    };

    const systemPrompt = `${systemPrompts[category] || systemPrompts.general} ${personalityStyles[personality]}`;
    const fullPrompt = `${systemPrompt}\n\nUser: ${message}\nAssistant:`;

    // Use Hugging Face text generation
    const response = await hf.textGeneration({
      model: 'microsoft/DialoGPT-medium',
      inputs: fullPrompt,
      parameters: {
        max_new_tokens: 150,
        temperature: 0.7,
        do_sample: true,
      }
    });

    const aiResponse = response.generated_text.replace(fullPrompt, '').trim();

    // Store the interaction in database
    const { error: insertError } = await supabaseClient
      .from('ai_responses')
      .insert({
        user_id: user.id,
        query: message,
        response: aiResponse,
        category: category,
        confidence_score: 0.85,
        model_used: 'DialoGPT-medium'
      });

    if (insertError) {
      console.error('Failed to store AI response:', insertError);
    }

    return new Response(
      JSON.stringify({ 
        response: aiResponse, 
        category,
        confidence: 0.85 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process AI chat request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});