import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Fingerprint, Eye, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdvancedBiometric = () => {
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
            <h1 className="text-2xl font-bold">Advanced Biometric Analysis</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Fingerprint className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Next-Generation Biometric Systems</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge biometric authentication and health monitoring using advanced AI and sensor technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Multi-Modal Authentication
                </CardTitle>
                <CardDescription>
                  Combine multiple biometric factors for enhanced security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Facial recognition with liveness detection</li>
                  <li>• Voice pattern analysis</li>
                  <li>• Gait recognition</li>
                  <li>• Behavioral biometrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Physiological Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time health metrics through biometric sensors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Heart rate variability analysis</li>
                  <li>• Blood pressure estimation</li>
                  <li>• Stress level detection</li>
                  <li>• Sleep quality assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Continuous Authentication
                </CardTitle>
                <CardDescription>
                  Seamless identity verification throughout usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Keystroke dynamics</li>
                  <li>• Mouse movement patterns</li>
                  <li>• Touch screen interactions</li>
                  <li>• Device usage patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>
                  Advanced protection for biometric data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Homomorphic encryption</li>
                  <li>• Secure multi-party computation</li>
                  <li>• Template protection schemes</li>
                  <li>• Zero-knowledge proofs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Biometric Analysis
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdvancedBiometric;