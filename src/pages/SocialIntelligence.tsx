import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, MessageCircle, Network, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialIntelligence = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Social Intelligence</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">AI-Powered Social Intelligence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand human behavior, emotions, and social dynamics through advanced AI analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Sentiment Analysis
                </CardTitle>
                <CardDescription>
                  Analyze emotions and opinions in text and speech
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Multi-language sentiment detection</li>
                  <li>• Emotion classification</li>
                  <li>• Sarcasm and irony detection</li>
                  <li>• Context-aware analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="w-5 h-5" />
                  Social Network Analysis
                </CardTitle>
                <CardDescription>
                  Map and analyze social connections and influence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Community detection algorithms</li>
                  <li>• Influence propagation models</li>
                  <li>• Network centrality measures</li>
                  <li>• Dynamic network evolution</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Behavioral Prediction
                </CardTitle>
                <CardDescription>
                  Predict user actions and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• User engagement modeling</li>
                  <li>• Churn prediction</li>
                  <li>• Recommendation systems</li>
                  <li>• Personalization algorithms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Intelligence</CardTitle>
                <CardDescription>
                  Understand cultural contexts and cross-cultural communication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Cultural dimension analysis</li>
                  <li>• Cross-cultural adaptation</li>
                  <li>• Language style analysis</li>
                  <li>• Cultural bias detection</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Activate Social Analysis
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SocialIntelligence;