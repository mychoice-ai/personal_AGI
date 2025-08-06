
import { User, HealthMetric, AIResponse, Integration, Goal } from '@/types';

export const mockUser: User = {
  id: 'user-1',
  name: 'Alex Thompson',
  email: 'alex.thompson@email.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  preferences: {
    notifications: true,
    healthTracking: true,
    aiPersonality: 'friendly',
    theme: 'dark'
  },
  subscription: 'pro'
};

export const mockHealthMetrics: HealthMetric[] = [
  {
    id: 'metric-1',
    type: 'heart_rate',
    value: 72,
    unit: 'bpm',
    timestamp: new Date(),
    trend: 'stable'
  },
  {
    id: 'metric-2',
    type: 'sleep',
    value: 7.5,
    unit: 'hours',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    trend: 'up'
  },
  {
    id: 'metric-3',
    type: 'steps',
    value: 8432,
    unit: 'steps',
    timestamp: new Date(),
    trend: 'up'
  },
  {
    id: 'metric-4',
    type: 'stress',
    value: 28,
    unit: '%',
    timestamp: new Date(),
    trend: 'down'
  }
];

export const mockAIResponses: AIResponse[] = [
  {
    id: 'ai-1',
    query: 'How can I improve my morning routine?',
    response: 'Based on your sleep patterns and stress levels, I recommend starting with 5 minutes of meditation, followed by light stretching. Your optimal wake time appears to be 6:30 AM based on your circadian rhythm analysis.',
    confidence: 0.92,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    category: 'health'
  },
  {
    id: 'ai-2',
    query: 'What should I focus on for my career growth?',
    response: 'Your productivity patterns show peak performance between 9-11 AM and 2-4 PM. I suggest scheduling important meetings and deep work during these windows. Consider developing your AI/ML skills - there are 3 relevant courses I can recommend.',
    confidence: 0.88,
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    category: 'productivity'
  },
  {
    id: 'ai-3',
    query: 'Help me brainstorm ideas for my project',
    response: 'Combining your interests in technology and sustainability, here are 5 innovative project ideas: 1) AI-powered energy optimization for smart homes, 2) Predictive maintenance for renewable energy systems, 3) Gamified carbon footprint reduction app...',
    confidence: 0.85,
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    category: 'creative'
  }
];

export const mockIntegrations: Integration[] = [
  {
    id: 'int-1',
    name: 'Apple Health',
    type: 'health',
    connected: true,
    lastSync: new Date(Date.now() - 30 * 60 * 1000),
    status: 'active'
  },
  {
    id: 'int-2',
    name: 'Google Calendar',
    type: 'productivity',
    connected: true,
    lastSync: new Date(Date.now() - 15 * 60 * 1000),
    status: 'active'
  },
  {
    id: 'int-3',
    name: 'Notion',
    type: 'productivity',
    connected: false,
    status: 'pending'
  },
  {
    id: 'int-4',
    name: 'Spotify',
    type: 'productivity',
    connected: true,
    lastSync: new Date(Date.now() - 5 * 60 * 1000),
    status: 'active'
  },
  {
    id: 'int-5',
    name: 'Philips Hue',
    type: 'smart_home',
    connected: true,
    lastSync: new Date(Date.now() - 60 * 60 * 1000),
    status: 'active'
  }
];

export const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    title: 'Improve Sleep Quality',
    description: 'Achieve consistent 8-hour sleep cycles with 85%+ deep sleep',
    category: 'health',
    progress: 67,
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    priority: 'high'
  },
  {
    id: 'goal-2',
    title: 'Complete AI Certification',
    description: 'Finish Stanford CS229 Machine Learning course',
    category: 'career',
    progress: 34,
    deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    priority: 'medium'
  },
  {
    id: 'goal-3',
    title: 'Launch Side Project',
    description: 'Deploy and market the productivity app MVP',
    category: 'personal',
    progress: 78,
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    priority: 'high'
  }
];
