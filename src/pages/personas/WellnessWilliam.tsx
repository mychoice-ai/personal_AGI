import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Heart, ArrowRight, Activity, Moon, Apple, Shield, Zap } from 'lucide-react';

const WellnessWilliam = () => {
  const features = [
    {
      icon: Activity,
      title: "Biometric Monitoring",
      description: "Comprehensive health tracking with 20+ device integrations"
    },
    {
      icon: Moon, 
      title: "Sleep Optimization",
      description: "Improve sleep quality and align with natural circadian rhythms"
    },
    {
      icon: Apple,
      title: "Nutrition Guidance",
      description: "Personalized meal planning and nutritional recommendations"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Early detection and prevention of health issues"
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Optimize daily energy levels and reduce fatigue"
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="outline" className="glass-morphism">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-xl quantum-gradient p-4 mx-auto mb-6">
            <Heart className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="neural-text-gradient">Wellness William</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The Health Enthusiast's AI Companion. Optimize health, prevent disease, 
            and enhance longevity through comprehensive biometric monitoring.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass-morphism rounded-lg px-4 py-2">
              <span className="text-accent font-semibold">25% improvement in health metrics</span>
            </div>
            <div className="glass-morphism rounded-lg px-4 py-2">
              <span className="text-accent font-semibold">90% better sleep quality</span>
            </div>
            <div className="glass-morphism rounded-lg px-4 py-2">
              <span className="text-accent font-semibold">35% reduced stress levels</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="glass-morphism p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 p-3 mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="glass-morphism rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Health?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join William and thousands of health enthusiasts who've transformed their wellbeing.
            </p>
            <Link to="/trial-signup">
              <Button size="lg" className="quantum-gradient text-black font-semibold px-12 py-4 rounded-xl hover:scale-105 transition-all duration-300">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessWilliam;