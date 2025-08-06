
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useMockData } from '@/hooks/useMockData';
import { 
  Heart, 
  Brain, 
  Target, 
  Activity, 
  Zap, 
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const Dashboard = () => {
  const { 
    user, 
    healthMetrics, 
    aiHistory, 
    goals, 
    isLoading,
    updateGoalProgress 
  } = useMockData();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl neural-text-gradient">Loading AGI Misao...</div>
      </div>
    );
  }

  const handleGoalProgress = async (goalId: string, currentProgress: number) => {
    const newProgress = Math.min(currentProgress + 10, 100);
    await updateGoalProgress(goalId, newProgress);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold neural-text-gradient mb-2">
            Welcome back, {user?.name}
          </h1>
          <p className="text-muted-foreground">
            Your AGI companion has been optimizing your day. Here's what I've discovered.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-morphism p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg quantum-gradient p-3">
                <Heart className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Health Score</p>
                <p className="text-2xl font-bold">82/100</p>
              </div>
            </div>
          </Card>

          <Card className="glass-morphism p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg quantum-gradient p-3">
                <Brain className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">AI Interactions</p>
                <p className="text-2xl font-bold">{aiHistory.length}</p>
              </div>
            </div>
          </Card>

          <Card className="glass-morphism p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg quantum-gradient p-3">
                <Target className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Goals Progress</p>
                <p className="text-2xl font-bold">
                  {Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length)}%
                </p>
              </div>
            </div>
          </Card>

          <Card className="glass-morphism p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg quantum-gradient p-3">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Optimization</p>
                <p className="text-2xl font-bold">Active</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Health Metrics */}
          <Card className="glass-morphism p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Health Metrics
            </h3>
            <div className="space-y-4">
              {healthMetrics.map((metric) => (
                <div key={metric.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium capitalize">
                      {metric.type.replace('_', ' ')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {metric.value} {metric.unit}
                    </p>
                  </div>
                  <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'}>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {metric.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Goals */}
          <Card className="glass-morphism p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Active Goals
            </h3>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{goal.title}</p>
                    <Badge variant={goal.priority === 'high' ? 'destructive' : 'default'}>
                      {goal.priority}
                    </Badge>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{goal.progress}% complete</span>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleGoalProgress(goal.id, goal.progress)}
                      disabled={goal.progress >= 100}
                    >
                      {goal.progress >= 100 ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        'Update Progress'
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent AI Insights */}
        <Card className="glass-morphism p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            Recent AI Insights
          </h3>
          <div className="space-y-4">
            {aiHistory.slice(0, 3).map((interaction) => (
              <div key={interaction.id} className="border-l-2 border-accent pl-4 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{interaction.query}</p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{interaction.timestamp.toLocaleTimeString()}</span>
                    <Badge variant="outline">
                      {Math.round(interaction.confidence * 100)}% confidence
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {interaction.response}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
