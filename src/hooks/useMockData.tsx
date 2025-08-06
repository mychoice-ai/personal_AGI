
import React, { createContext, useContext, useState, useEffect } from 'react';
import { MockAPIService } from '@/services/mockAPI';
import { User, HealthMetric, AIResponse, Integration, Goal } from '@/types';

interface MockDataContextType {
  user: User | null;
  healthMetrics: HealthMetric[];
  aiHistory: AIResponse[];
  integrations: Integration[];
  goals: Goal[];
  isLoading: boolean;
  // Actions
  askAI: (query: string, category?: AIResponse['category']) => Promise<AIResponse>;
  toggleIntegration: (id: string) => Promise<void>;
  updateGoalProgress: (id: string, progress: number) => Promise<void>;
  refreshData: () => Promise<void>;
}

const MockDataContext = createContext<MockDataContextType | undefined>(undefined);

export const MockDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [healthMetrics, setHealthMetrics] = useState<HealthMetric[]>([]);
  const [aiHistory, setAIHistory] = useState<AIResponse[]>([]);
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadInitialData = async () => {
    try {
      setIsLoading(true);
      const [userData, metrics, history, integrationsData, goalsData] = await Promise.all([
        MockAPIService.getCurrentUser(),
        MockAPIService.getHealthMetrics(),
        MockAPIService.getAIHistory(),
        MockAPIService.getIntegrations(),
        MockAPIService.getGoals()
      ]);

      setUser(userData);
      setHealthMetrics(metrics);
      setAIHistory(history);
      setIntegrations(integrationsData);
      setGoals(goalsData);
    } catch (error) {
      console.error('Error loading mock data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const askAI = async (query: string, category?: AIResponse['category']) => {
    const response = await MockAPIService.askAI(query, category);
    setAIHistory(prev => [response, ...prev]);
    return response;
  };

  const toggleIntegration = async (id: string) => {
    const updatedIntegration = await MockAPIService.toggleIntegration(id);
    setIntegrations(prev => 
      prev.map(integration => 
        integration.id === id ? updatedIntegration : integration
      )
    );
  };

  const updateGoalProgress = async (id: string, progress: number) => {
    const updatedGoal = await MockAPIService.updateGoalProgress(id, progress);
    setGoals(prev => 
      prev.map(goal => 
        goal.id === id ? updatedGoal : goal
      )
    );
  };

  const refreshData = async () => {
    await loadInitialData();
  };

  useEffect(() => {
    loadInitialData();

    // Set up real-time updates
    MockAPIService.subscribeToRealTimeUpdates((update) => {
      console.log('Real-time update:', update);
      // In a real app, you'd update state based on the update type
    });
  }, []);

  const value: MockDataContextType = {
    user,
    healthMetrics,
    aiHistory,
    integrations,
    goals,
    isLoading,
    askAI,
    toggleIntegration,
    updateGoalProgress,
    refreshData
  };

  return (
    <MockDataContext.Provider value={value}>
      {children}
    </MockDataContext.Provider>
  );
};

export const useMockData = () => {
  const context = useContext(MockDataContext);
  if (context === undefined) {
    throw new Error('useMockData must be used within a MockDataProvider');
  }
  return context;
};
