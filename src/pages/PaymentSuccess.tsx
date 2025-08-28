import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Gift } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <div className="w-24 h-24 rounded-full quantum-gradient p-6 mx-auto mb-8 animate-pulse">
            <CheckCircle className="w-12 h-12 text-black" />
          </div>

          {/* Success Message */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="neural-text-gradient">Welcome to AGI Misao!</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your free trial has been activated successfully. Experience the future of AI companionship.
          </p>

          {/* Trial Details */}
          <Card className="glass-morphism p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-accent mr-2" />
              <h3 className="text-xl font-semibold">Your 14-Day Free Trial</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>✓ Full access to all Pro features</p>
              <p>✓ Advanced AI reasoning and analytics</p>
              <p>✓ Biometric monitoring integrations</p>
              <p>✓ Priority customer support</p>
              <p className="text-sm mt-4">
                You won't be charged until your trial ends. Cancel anytime.
              </p>
            </div>
          </Card>

          {/* Next Steps */}
          <div className="space-y-4">
            <Link to="/dashboard">
              <Button size="lg" className="quantum-gradient text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
                Enter Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/consciousness-simulation">
                <Button variant="outline" className="glass-morphism border-accent/30 hover:border-accent">
                  Explore Consciousness
                </Button>
              </Link>
              
              <Link to="/advanced-biometric">
                <Button variant="outline" className="glass-morphism border-accent/30 hover:border-accent">
                  Setup Health Monitoring
                </Button>
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Need help getting started?{' '}
              <a href="mailto:support@agimisao.com" className="text-accent hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;