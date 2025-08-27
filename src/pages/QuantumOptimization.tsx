import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Atom, Zap, Target, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumOptimization = () => {
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
            <h1 className="text-2xl font-bold">Quantum Optimization</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Atom className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Quantum-Enhanced Optimization</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage quantum computing principles to solve complex optimization problems exponentially faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quantum Annealing
                </CardTitle>
                <CardDescription>
                  Solve combinatorial optimization problems using quantum annealing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• QUBO formulation</li>
                  <li>• Ising model optimization</li>
                  <li>• Simulated annealing comparison</li>
                  <li>• D-Wave integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  QAOA Algorithms
                </CardTitle>
                <CardDescription>
                  Quantum Approximate Optimization Algorithm implementations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Variational quantum circuits</li>
                  <li>• Parameter optimization</li>
                  <li>• Classical pre-processing</li>
                  <li>• Hybrid quantum-classical loops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  Quantum Machine Learning
                </CardTitle>
                <CardDescription>
                  Enhance ML algorithms with quantum computing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Quantum neural networks</li>
                  <li>• Variational quantum eigensolvers</li>
                  <li>• Quantum support vector machines</li>
                  <li>• Quantum feature maps</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
                <CardDescription>
                  Real-world quantum optimization use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Portfolio optimization</li>
                  <li>• Traffic flow optimization</li>
                  <li>• Drug discovery</li>
                  <li>• Supply chain optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Initialize Quantum Solver
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuantumOptimization;