-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE public.ai_personality AS ENUM ('formal', 'casual', 'friendly');
CREATE TYPE public.user_theme AS ENUM ('light', 'dark', 'auto');
CREATE TYPE public.subscription_type AS ENUM ('free', 'pro', 'elite');
CREATE TYPE public.health_metric_type AS ENUM ('heart_rate', 'sleep', 'steps', 'stress', 'temperature');
CREATE TYPE public.trend_type AS ENUM ('up', 'down', 'stable');
CREATE TYPE public.ai_category AS ENUM ('health', 'productivity', 'creative', 'planning');
CREATE TYPE public.integration_type AS ENUM ('health', 'productivity', 'smart_home', 'social');
CREATE TYPE public.integration_status AS ENUM ('active', 'error', 'pending');
CREATE TYPE public.goal_category AS ENUM ('health', 'career', 'personal', 'financial');
CREATE TYPE public.goal_priority AS ENUM ('low', 'medium', 'high');

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  notifications BOOLEAN DEFAULT true,
  health_tracking BOOLEAN DEFAULT true,
  ai_personality ai_personality DEFAULT 'friendly',
  theme user_theme DEFAULT 'auto',
  subscription subscription_type DEFAULT 'free',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create health_metrics table
CREATE TABLE public.health_metrics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type health_metric_type NOT NULL,
  value NUMERIC NOT NULL,
  unit TEXT NOT NULL,
  trend trend_type DEFAULT 'stable',
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create ai_responses table
CREATE TABLE public.ai_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  query TEXT NOT NULL,
  response TEXT NOT NULL,
  confidence NUMERIC CHECK (confidence >= 0 AND confidence <= 1),
  category ai_category NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create integrations table
CREATE TABLE public.integrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type integration_type NOT NULL,
  connected BOOLEAN DEFAULT false,
  last_sync TIMESTAMP WITH TIME ZONE,
  status integration_status DEFAULT 'pending',
  config JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create goals table
CREATE TABLE public.goals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  category goal_category NOT NULL,
  progress NUMERIC DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  deadline TIMESTAMP WITH TIME ZONE,
  priority goal_priority DEFAULT 'medium',
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage buckets for file storage
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('avatars', 'avatars', true),
  ('documents', 'documents', false),
  ('health-reports', 'health-reports', false),
  ('analysis-results', 'analysis-results', false);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.health_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.goals ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create RLS policies for health_metrics
CREATE POLICY "Users can view their own health metrics" 
  ON public.health_metrics FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own health metrics" 
  ON public.health_metrics FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own health metrics" 
  ON public.health_metrics FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own health metrics" 
  ON public.health_metrics FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for ai_responses
CREATE POLICY "Users can view their own AI responses" 
  ON public.ai_responses FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own AI responses" 
  ON public.ai_responses FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own AI responses" 
  ON public.ai_responses FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for integrations
CREATE POLICY "Users can view their own integrations" 
  ON public.integrations FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own integrations" 
  ON public.integrations FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own integrations" 
  ON public.integrations FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own integrations" 
  ON public.integrations FOR DELETE 
  USING (auth.uid() = user_id);

-- Create RLS policies for goals
CREATE POLICY "Users can view their own goals" 
  ON public.goals FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own goals" 
  ON public.goals FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own goals" 
  ON public.goals FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own goals" 
  ON public.goals FOR DELETE 
  USING (auth.uid() = user_id);

-- Create storage policies for avatars bucket (public)
CREATE POLICY "Avatar images are publicly accessible" 
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar" 
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own avatar" 
  ON storage.objects FOR UPDATE 
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own avatar" 
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create storage policies for documents bucket (private)
CREATE POLICY "Users can view their own documents" 
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own documents" 
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own documents" 
  ON storage.objects FOR UPDATE 
  USING (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own documents" 
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'documents' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create storage policies for health-reports bucket (private)
CREATE POLICY "Users can view their own health reports" 
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'health-reports' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own health reports" 
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'health-reports' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own health reports" 
  ON storage.objects FOR UPDATE 
  USING (bucket_id = 'health-reports' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own health reports" 
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'health-reports' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create storage policies for analysis-results bucket (private)
CREATE POLICY "Users can view their own analysis results" 
  ON storage.objects FOR SELECT 
  USING (bucket_id = 'analysis-results' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own analysis results" 
  ON storage.objects FOR INSERT 
  WITH CHECK (bucket_id = 'analysis-results' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own analysis results" 
  ON storage.objects FOR UPDATE 
  USING (bucket_id = 'analysis-results' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own analysis results" 
  ON storage.objects FOR DELETE 
  USING (bucket_id = 'analysis-results' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_integrations_updated_at
  BEFORE UPDATE ON public.integrations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_goals_updated_at
  BEFORE UPDATE ON public.goals
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable real-time for all tables
ALTER TABLE public.profiles REPLICA IDENTITY FULL;
ALTER TABLE public.health_metrics REPLICA IDENTITY FULL;
ALTER TABLE public.ai_responses REPLICA IDENTITY FULL;
ALTER TABLE public.integrations REPLICA IDENTITY FULL;
ALTER TABLE public.goals REPLICA IDENTITY FULL;

-- Add tables to real-time publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
ALTER PUBLICATION supabase_realtime ADD TABLE public.health_metrics;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ai_responses;
ALTER PUBLICATION supabase_realtime ADD TABLE public.integrations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.goals;