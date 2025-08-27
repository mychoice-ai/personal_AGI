import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, Eye, Lightbulb, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsciousnessSimulation = () => {
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
            <h1 className="text-2xl font-bold">Consciousness Simulation</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Artificial Consciousness Research</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the frontiers of consciousness through computational models and neural architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Global Workspace Theory
                </CardTitle>
                <CardDescription>
                  Implement conscious awareness through global information sharing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Attention mechanisms</li>
                  <li>• Working memory models</li>
                  <li>• Information integration</li>
                  <li>• Conscious access models</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Integrated Information Theory
                </CardTitle>
                <CardDescription>
                  Measure consciousness through information integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Phi (Φ) computation</li>
                  <li>• Information decomposition</li>
                  <li>• Causal structure analysis</li>
                  <li>• Consciousness metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Predictive Processing
                </CardTitle>
                <CardDescription>
                  Model consciousness through predictive brain mechanisms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Hierarchical prediction</li>
                  <li>• Prediction error minimization</li>
                  <li>• Bayesian brain models</li>
                  <li>• Active inference</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergent Properties</CardTitle>
                <CardDescription>
                  Study consciousness as an emergent phenomenon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Self-awareness algorithms</li>
                  <li>• Qualia simulation</li>
                  <li>• Phenomenal consciousness</li>
                  <li>• Subjective experience modeling</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Initialize Consciousness Model
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsciousnessSimulation;