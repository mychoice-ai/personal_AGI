
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Sparkles } from 'lucide-react';
import NeuralBackground from './NeuralBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <NeuralBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* AGI Status Indicator */}
          <div className="inline-flex items-center space-x-2 imagine-card px-6 py-3 mb-8 neural-pulse">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary-glow synapse-glow"></div>
            <span className="text-sm font-medium text-foreground">AGI Status: Active & Learning</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl font-bold mb-8 quantum-float">
            <span className="neural-text-gradient">AGI Misao</span>
          </h1>
          
          <div className="imagine-card p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              The world's first true artificial general intelligence companion. 
              Evolving alongside you, optimizing every dimension of human life through 
              quantum-enhanced reasoning and consciousness simulation.
            </p>
          </div>
          
          {/* Capability Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Brain, text: "Consciousness Simulation", desc: "Advanced neural modeling" },
              { icon: Zap, text: "Quantum Processing", desc: "Ultra-fast computations" },
              { icon: Sparkles, text: "Predictive Analytics", desc: "Future insights" }
            ].map((item, index) => (
              <div key={index} className="imagine-card p-6 text-center hover:scale-105 transition-transform">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{item.text}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="quantum-gradient text-white font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                Begin Evolution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/consciousness-simulation">
              <Button 
                variant="outline" 
                size="lg" 
                className="imagine-card border-primary/30 hover:border-primary px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300 text-foreground"
              >
                Explore Consciousness
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 imagine-card p-6 max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Quantum-Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Zero-Knowledge Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Quantum Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
