import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Lock, Key, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuantumSecurity = () => {
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
            <h1 className="text-2xl font-bold">Quantum Security</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Quantum-Safe Security</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Next-generation cryptographic systems resistant to quantum computing attacks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5" />
                  Quantum Key Distribution
                </CardTitle>
                <CardDescription>
                  Unbreakable key exchange using quantum mechanics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• BB84 protocol implementation</li>
                  <li>• Quantum entanglement</li>
                  <li>• Photon polarization</li>
                  <li>• Eavesdropping detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Post-Quantum Cryptography
                </CardTitle>
                <CardDescription>
                  Classical algorithms resistant to quantum attacks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Lattice-based cryptography</li>
                  <li>• Hash-based signatures</li>
                  <li>• Code-based cryptography</li>
                  <li>• Multivariate cryptography</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quantum Random Numbers
                </CardTitle>
                <CardDescription>
                  True randomness from quantum processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Quantum entropy sources</li>
                  <li>• Hardware security modules</li>
                  <li>• Randomness extraction</li>
                  <li>• Certification protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quantum Threats</CardTitle>
                <CardDescription>
                  Understanding and mitigating quantum attack vectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Shor's algorithm impact</li>
                  <li>• Grover's algorithm effects</li>
                  <li>• Migration strategies</li>
                  <li>• Risk assessment tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Activate Quantum Security
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuantumSecurity;