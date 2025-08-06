
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    notifications: boolean;
    healthTracking: boolean;
    aiPersonality: 'formal' | 'casual' | 'friendly';
    theme: 'light' | 'dark' | 'auto';
  };
  subscription: 'free' | 'pro' | 'elite';
}

export interface HealthMetric {
  id: string;
  type: 'heart_rate' | 'sleep' | 'steps' | 'stress' | 'temperature';
  value: number;
  unit: string;
  timestamp: Date;
  trend: 'up' | 'down' | 'stable';
}

export interface AIResponse {
  id: string;
  query: string;
  response: string;
  confidence: number;
  timestamp: Date;
  category: 'health' | 'productivity' | 'creative' | 'planning';
}

export interface Integration {
  id: string;
  name: string;
  type: 'health' | 'productivity' | 'smart_home' | 'social';
  connected: boolean;
  lastSync?: Date;
  status: 'active' | 'error' | 'pending';
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'health' | 'career' | 'personal' | 'financial';
  progress: number;
  deadline: Date;
  priority: 'low' | 'medium' | 'high';
}
