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
    const { type = 'health' } = await req.json();
    
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

    // Get user's recent data
    const { data: healthMetrics } = await supabaseClient
      .from('health_metrics')
      .select('*')
      .eq('user_id', user.id)
      .order('recorded_at', { ascending: false })
      .limit(10);

    const { data: goals } = await supabaseClient
      .from('goals')
      .select('*')
      .eq('user_id', user.id)
      .limit(5);

    let insightPrompt = '';
    
    if (type === 'health') {
      const metricsData = healthMetrics?.map(m => `${m.metric_type}: ${m.value} ${m.unit}`).join(', ') || 'No recent health data';
      insightPrompt = `Based on this health data: ${metricsData}. Provide 3 actionable health insights and recommendations.`;
    } else if (type === 'productivity') {
      const goalsData = goals?.map(g => `${g.title}: ${g.progress}% complete`).join(', ') || 'No current goals';
      insightPrompt = `Based on these goals: ${goalsData}. Provide 3 productivity insights and recommendations for better goal achievement.`;
    }

    const response = await hf.textGeneration({
      model: 'microsoft/DialoGPT-medium',
      inputs: `You are an AI insights analyst. ${insightPrompt}\n\nProvide a structured response with specific, actionable recommendations.\n\nInsights:`,
      parameters: {
        max_new_tokens: 200,
        temperature: 0.6,
      }
    });

    const insights = response.generated_text.split('Insights:')[1]?.trim() || response.generated_text;

    return new Response(
      JSON.stringify({ 
        insights,
        type,
        data_points: type === 'health' ? healthMetrics?.length || 0 : goals?.length || 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ai-insights function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate insights' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});