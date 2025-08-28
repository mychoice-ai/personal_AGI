import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Briefcase, ArrowRight, Calendar, TrendingUp, Zap, Heart, Brain } from 'lucide-react';

const OptimizationOliver = () => {
  const features = [
    {
      icon: Calendar,
      title: "AI-Powered Scheduling",
      description: "Optimize your calendar for peak productivity and energy levels"
    },
    {
      icon: TrendingUp, 
      title: "Performance Analytics",
      description: "Track and improve key metrics that matter to your career"
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Align tasks with your natural energy patterns for maximum efficiency"
    },
    {
      icon: Heart,
      title: "Health Integration",
      description: "Monitor stress, sleep, and wellness to maintain peak performance"
    },
    {
      icon: Brain,
      title: "Decision Support",
      description: "Get AI-powered insights for complex professional decisions"
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
            <Briefcase className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="neural-text-gradient">Optimization Oliver</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The Tech Professional's AI Companion. Maximize productivity, optimize health, 
            and advance your career through AI-powered insights and intelligent scheduling.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="glass-morphism rounded-lg px-4 py-2">
              <span className="text-accent font-semibold">50% faster decisions</span>
            </div>
            <div className="glass-morphism rounded-lg px-4 py-2">
              <span className="text-accent font-semibold">25% better work-life balance</span>
            </div>
            <div className="glass-morphism rounded-lg px-4 py-2">
              <span className="text-accent font-semibold">40% improved health metrics</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="glass-morphism p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-3 mb-4">
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
            <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Life?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join Oliver and thousands of tech professionals who've transformed their productivity.
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

export default OptimizationOliver;