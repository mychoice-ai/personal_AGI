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

    // Get comprehensive health data
    const { data: healthMetrics } = await supabaseClient
      .from('health_metrics')
      .select('*')
      .eq('user_id', user.id)
      .order('recorded_at', { ascending: false })
      .limit(30);

    if (!healthMetrics || healthMetrics.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No health data available for analysis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Organize metrics by type
    const metricsByType = healthMetrics.reduce((acc, metric) => {
      if (!acc[metric.metric_type]) acc[metric.metric_type] = [];
      acc[metric.metric_type].push(metric);
      return acc;
    }, {} as Record<string, any[]>);

    // Generate analysis prompt
    const metricsText = Object.entries(metricsByType)
      .map(([type, metrics]) => {
        const latest = metrics[0];
        const trend = metrics.length > 1 ? 
          (metrics[0].value > metrics[1].value ? 'increasing' : 'decreasing') : 'stable';
        return `${type}: current ${latest.value} ${latest.unit} (trend: ${trend})`;
      })
      .join('; ');

    const analysisPrompt = `Analyze this health data: ${metricsText}. 
    Provide a comprehensive health analysis including:
    1. Overall health status assessment
    2. Key trends and patterns
    3. Risk factors or concerns
    4. Specific recommendations for improvement
    5. Suggested monitoring frequency
    
    Format as a structured health report.`;

    const response = await hf.textGeneration({
      model: 'microsoft/DialoGPT-medium',
      inputs: `You are a health data analyst. ${analysisPrompt}\n\nHealth Analysis Report:`,
      parameters: {
        max_new_tokens: 300,
        temperature: 0.5,
      }
    });

    const analysis = response.generated_text.split('Health Analysis Report:')[1]?.trim() || response.generated_text;

    // Store analysis result
    const { error: storeError } = await supabaseClient
      .from('ai_responses')
      .insert({
        user_id: user.id,
        query: 'Health Data Analysis',
        response: analysis,
        category: 'health',
        confidence_score: 0.9,
        model_used: 'DialoGPT-health-analysis'
      });

    if (storeError) {
      console.error('Failed to store analysis:', storeError);
    }

    return new Response(
      JSON.stringify({ 
        analysis,
        metrics_analyzed: healthMetrics.length,
        metric_types: Object.keys(metricsByType),
        analysis_date: new Date().toISOString()
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in health-analysis function:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to analyze health data' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});