import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CreditCard, Shield, Zap, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const TrialSignup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStartTrial = async () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { email, planType: 'trial' }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Failed to start checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const trialFeatures = [
    'Full access to all Pro features for 14 days',
    'Advanced AI reasoning and causal analysis',
    'Biometric monitoring with 15+ device integrations',
    'Predictive analytics and behavioral insights',
    'Social intelligence and emotion recognition',
    'Quantum optimization algorithms',
    'Priority customer support',
    'No commitment - cancel anytime'
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="outline" className="glass-morphism">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="neural-text-gradient">Start Your Free Trial</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the full power of AGI Misao with a 14-day free trial. 
              No commitment, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Trial Features */}
            <div>
              <Card className="glass-morphism p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-accent mr-3" />
                  What's Included
                </h3>
                <ul className="space-y-4">
                  {trialFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Security Features */}
              <Card className="glass-morphism p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-accent mr-2" />
                  Secure & Private
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>• Quantum encryption</div>
                  <div>• GDPR compliant</div>
                  <div>• Zero-knowledge architecture</div>
                  <div>• SOC 2 certified</div>
                </div>
              </Card>
            </div>

            {/* Signup Form */}
            <div>
              <Card className="glass-morphism p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-xl quantum-gradient p-4 mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Free 14-Day Trial</h3>
                  <p className="text-muted-foreground">
                    Then just <span className="font-semibold text-accent">$29/month</span>
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass-morphism border-accent/20 focus:border-accent mt-2"
                    />
                  </div>

                  <Button 
                    onClick={handleStartTrial}
                    disabled={loading}
                    size="lg" 
                    className="w-full quantum-gradient text-black font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    {loading ? 'Starting Trial...' : 'Start Free Trial'}
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>No credit card required for trial</p>
                    <p className="mt-2">
                      By continuing, you agree to our{' '}
                      <Link to="/terms" className="text-accent hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-accent hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </Card>

              {/* Testimonial */}
              <div className="mt-6 text-center">
                <div className="glass-morphism rounded-lg p-4">
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "AGI Misao transformed my productivity and health. The insights are incredible!"
                  </p>
                  <p className="text-xs font-medium">- Sarah K., Tech Executive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialSignup;