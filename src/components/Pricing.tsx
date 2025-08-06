
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Zap, Crown, Building } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free Tier",
      icon: Zap,
      price: "Free",
      period: "forever",
      description: "Perfect for exploring AGI capabilities",
      features: [
        "Basic AI assistance",
        "Limited integrations (5)",
        "Standard response time",
        "Community support",
        "Basic health tracking"
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-slate-500 to-gray-500"
    },
    {
      name: "Pro Tier",
      icon: Crown,
      price: "$29",
      period: "per month",
      description: "Advanced features for serious optimization",
      features: [
        "Advanced AI reasoning",
        "Biometric monitoring (15+ devices)",
        "Predictive analytics",
        "Priority support",
        "Quantum optimization",
        "Social intelligence",
        "Custom integrations"
      ],
      buttonText: "Start Pro Trial",
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Elite Tier",
      icon: Building,
      price: "$99",
      period: "per month",
      description: "Consciousness simulation & cutting-edge features",
      features: [
        "Everything in Pro",
        "Consciousness simulation",
        "Collective intelligence network",
        "AR/VR integration",
        "Robotic coordination",
        "Quantum processing priority",
        "Advanced goal optimization",
        "Dedicated success manager"
      ],
      buttonText: "Go Elite",
      popular: false,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neural-text-gradient">Choose Your Evolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic AI assistance to full consciousness simulation. 
            Start free and evolve as your needs grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`glass-morphism p-8 relative hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="quantum-gradient text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.gradient} p-3 mb-6 quantum-float`}>
                <plan.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="mb-8">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold neural-text-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'quantum-gradient text-black hover:scale-105' 
                    : 'glass-morphism border-accent/30 hover:border-accent'
                } transition-all duration-300`}
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need something custom for your organization?
          </p>
          <Button 
            variant="outline" 
            className="glass-morphism border-accent/30 hover:border-accent"
          >
            Enterprise Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
