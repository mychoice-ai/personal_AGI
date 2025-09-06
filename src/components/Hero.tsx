
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Sparkles } from 'lucide-react';
import NeuralBackground from './NeuralBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content Card */}
          <div className="luma-card p-12 mb-8 max-w-3xl mx-auto">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">AGI Status: Active</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="luma-text-gradient">AGI Misao</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              The world's first true artificial general intelligence companion. 
              Evolving alongside you, optimizing every dimension of human life through 
              quantum-enhanced reasoning and consciousness simulation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="luma-gradient text-background font-medium px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  Try Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              
              <Link to="/consciousness-simulation">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-border/50 hover:border-border bg-transparent px-8 py-3 rounded-lg hover:bg-accent/10 transition-all duration-300 text-foreground"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Brain, text: "Consciousness Simulation", desc: "Advanced neural modeling" },
              { icon: Zap, text: "Quantum Processing", desc: "Ultra-fast computations" },
              { icon: Sparkles, text: "Predictive Analytics", desc: "Future insights" }
            ].map((item, index) => (
              <div key={index} className="luma-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <item.icon className="w-6 h-6 text-foreground mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-medium text-foreground mb-2 text-sm">{item.text}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground text-sm">
            {[
              "Quantum-Secured",
              "GDPR Compliant", 
              "99.9% Uptime",
              "Zero-Knowledge Architecture"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-muted-foreground/50"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
