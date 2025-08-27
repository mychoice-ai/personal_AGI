import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, RefreshCw, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const MetaLearning = () => {
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
            <h1 className="text-2xl font-bold">Meta-Learning Agent</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Learning to Learn</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced meta-learning algorithms that enable rapid adaptation to new tasks with minimal data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Few-Shot Learning
                </CardTitle>
                <CardDescription>
                  Learn new concepts from just a few examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• MAML (Model-Agnostic Meta-Learning)</li>
                  <li>• Prototypical Networks</li>
                  <li>• Matching Networks</li>
                  <li>• Relation Networks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Neural Architecture Search
                </CardTitle>
                <CardDescription>
                  Automatically discover optimal neural architectures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Differentiable NAS</li>
                  <li>• Evolutionary search</li>
                  <li>• Progressive search strategies</li>
                  <li>• Hardware-aware optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  Hyperparameter Optimization
                </CardTitle>
                <CardDescription>
                  Intelligent hyperparameter tuning strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Bayesian optimization</li>
                  <li>• Population-based training</li>
                  <li>• Multi-fidelity methods</li>
                  <li>• Automated ML pipelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Continual Learning</CardTitle>
                <CardDescription>
                  Learn new tasks without forgetting previous ones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Elastic Weight Consolidation</li>
                  <li>• Progressive Neural Networks</li>
                  <li>• Memory replay systems</li>
                  <li>• Task-agnostic learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Initialize Meta-Learning
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MetaLearning;