import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, GitBranch, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CausalReasoning = () => {
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
            <h1 className="text-2xl font-bold">Causal Reasoning Engine</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Advanced Causal Inference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover cause-and-effect relationships in complex systems using cutting-edge causal inference algorithms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Causal Discovery
                </CardTitle>
                <CardDescription>
                  Automatically identify causal relationships from observational data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• PC Algorithm implementation</li>
                  <li>• Constraint-based methods</li>
                  <li>• Score-based approaches</li>
                  <li>• Hybrid algorithms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Intervention Analysis
                </CardTitle>
                <CardDescription>
                  Predict the effects of interventions before implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Do-calculus framework</li>
                  <li>• Counterfactual reasoning</li>
                  <li>• Treatment effect estimation</li>
                  <li>• Policy optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Temporal Causality
                </CardTitle>
                <CardDescription>
                  Analyze causal relationships across time series data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Granger causality tests</li>
                  <li>• Dynamic causal networks</li>
                  <li>• Time-varying relationships</li>
                  <li>• Lag structure analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
                <CardDescription>
                  Real-world use cases and implementations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Healthcare treatment optimization</li>
                  <li>• Economic policy analysis</li>
                  <li>• Marketing attribution</li>
                  <li>• System reliability engineering</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Launch Causal Analysis
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CausalReasoning;