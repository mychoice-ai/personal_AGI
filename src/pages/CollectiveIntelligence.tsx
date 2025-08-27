import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Share2, Layers, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectiveIntelligence = () => {
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
            <h1 className="text-2xl font-bold">Collective Intelligence</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Distributed Intelligence Systems</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Harness the power of distributed AI agents working together to solve complex problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Swarm Intelligence
                </CardTitle>
                <CardDescription>
                  Coordinate multiple AI agents for collective problem-solving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Particle swarm optimization</li>
                  <li>• Ant colony algorithms</li>
                  <li>• Bee colony optimization</li>
                  <li>• Firefly algorithms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Federated Learning
                </CardTitle>
                <CardDescription>
                  Train models collaboratively without sharing raw data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Privacy-preserving learning</li>
                  <li>• Differential privacy</li>
                  <li>• Secure aggregation</li>
                  <li>• Cross-device coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5" />
                  Multi-Agent Systems
                </CardTitle>
                <CardDescription>
                  Autonomous agents collaborating and competing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Agent communication protocols</li>
                  <li>• Negotiation algorithms</li>
                  <li>• Task allocation strategies</li>
                  <li>• Consensus mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Crowd Intelligence</CardTitle>
                <CardDescription>
                  Aggregate human and AI intelligence for better decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Prediction markets</li>
                  <li>• Human-in-the-loop systems</li>
                  <li>• Wisdom of crowds algorithms</li>
                  <li>• Collaborative filtering</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Deploy Collective System
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollectiveIntelligence;