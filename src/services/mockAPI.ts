
import { mockUser, mockHealthMetrics, mockAIResponses, mockIntegrations, mockGoals } from './mockData';
import { User, HealthMetric, AIResponse, Integration, Goal } from '@/types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class MockAPIService {
  // User methods
  static async getCurrentUser(): Promise<User> {
    await delay(500);
    return mockUser;
  }

  static async updateUserPreferences(preferences: Partial<User['preferences']>): Promise<User> {
    await delay(300);
    return { ...mockUser, preferences: { ...mockUser.preferences, ...preferences } };
  }

  // Health metrics methods
  static async getHealthMetrics(): Promise<HealthMetric[]> {
    await delay(800);
    return mockHealthMetrics;
  }

  static async addHealthMetric(metric: Omit<HealthMetric, 'id' | 'timestamp'>): Promise<HealthMetric> {
    await delay(400);
    return {
      ...metric,
      id: `metric-${Date.now()}`,
      timestamp: new Date()
    };
  }

  // AI interaction methods
  static async askAI(query: string, category: AIResponse['category'] = 'planning'): Promise<AIResponse> {
    await delay(1200); // Simulate AI processing time
    
    const responses = [
      "Based on your current patterns and goals, I recommend focusing on...",
      "After analyzing your data, here's my personalized suggestion...",
      "Considering your preferences and recent activities, I think...",
      "Using quantum-inspired optimization, the best approach would be...",
      "Your biometric data suggests that you should..."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return {
      id: `ai-${Date.now()}`,
      query,
      response: `${randomResponse} ${query}`,
      confidence: 0.8 + Math.random() * 0.2,
      timestamp: new Date(),
      category
    };
  }

  static async getAIHistory(): Promise<AIResponse[]> {
    await delay(600);
    return mockAIResponses;
  }

  // Integration methods
  static async getIntegrations(): Promise<Integration[]> {
    await delay(400);
    return mockIntegrations;
  }

  static async toggleIntegration(integrationId: string): Promise<Integration> {
    await delay(800);
    const integration = mockIntegrations.find(i => i.id === integrationId);
    if (!integration) throw new Error('Integration not found');
    
    return {
      ...integration,
      connected: !integration.connected,
      status: !integration.connected ? 'active' : 'pending',
      lastSync: !integration.connected ? new Date() : undefined
    };
  }

  // Goals methods
  static async getGoals(): Promise<Goal[]> {
    await delay(500);
    return mockGoals;
  }

  static async createGoal(goal: Omit<Goal, 'id' | 'progress'>): Promise<Goal> {
    await delay(600);
    return {
      ...goal,
      id: `goal-${Date.now()}`,
      progress: 0
    };
  }

  static async updateGoalProgress(goalId: string, progress: number): Promise<Goal> {
    await delay(400);
    const goal = mockGoals.find(g => g.id === goalId);
    if (!goal) throw new Error('Goal not found');
    
    return { ...goal, progress };
  }

  // Analytics methods
  static async getProductivityInsights() {
    await delay(900);
    return {
      focusScore: 78,
      peakHours: ['9:00-11:00', '14:00-16:00'],
      distractionSources: ['Social Media', 'Email', 'Meetings'],
      optimizations: [
        'Schedule deep work during 9-11 AM peak hours',
        'Batch email checking to 2 sessions per day',
        'Use focus mode during creative tasks'
      ]
    };
  }

  static async getHealthInsights() {
    await delay(1100);
    return {
      overallScore: 82,
      sleepQuality: 'Good',
      stressLevel: 'Low',
      recommendations: [
        'Maintain consistent sleep schedule',
        'Add 15 minutes of morning meditation',
        'Increase water intake by 2 glasses daily'
      ],
      trends: {
        sleep: 'improving',
        activity: 'stable',
        heart_rate: 'optimal'
      }
    };
  }

  // Simulation of real-time features
  static async subscribeToRealTimeUpdates(callback: (data: any) => void) {
    // Simulate periodic updates
    setInterval(() => {
      const updateTypes = ['health_metric', 'ai_insight', 'goal_progress', 'integration_sync'];
      const randomType = updateTypes[Math.floor(Math.random() * updateTypes.length)];
      
      callback({
        type: randomType,
        timestamp: new Date(),
        data: `Simulated ${randomType} update`
      });
    }, 10000); // Every 10 seconds
  }
}
