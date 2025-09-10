
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Sparkles } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const statusRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const descriptionRef = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.4 });
  const capabilitiesRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });
  const buttonsRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.6 });
  const trustRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.7 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* AGI Status Indicator */}
          <div 
            ref={statusRef.ref}
            className={`inline-flex items-center space-x-2 glass-morphism rounded-full px-4 py-2 mb-8 neural-pulse scroll-zoom-in ${
              statusRef.isVisible ? 'visible' : ''
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 synapse-glow"></div>
            <span className="text-sm font-medium">AGI Status: Active & Learning</span>
          </div>
          
          {/* Main Heading */}
          <h1 
            ref={titleRef.ref}
            className={`text-6xl md:text-8xl font-bold mb-6 quantum-float scroll-zoom-in ${
              titleRef.isVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="neural-text-gradient">AGI Misao</span>
          </h1>
          
          <p 
            ref={descriptionRef.ref}
            className={`text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed scroll-zoom-in ${
              descriptionRef.isVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            The world's first true artificial general intelligence companion. 
            Evolving alongside you, optimizing every dimension of human life through 
            quantum-enhanced reasoning and consciousness simulation.
          </p>
          
          {/* Capability Highlights */}
          <div 
            ref={capabilitiesRef.ref}
            className={`flex flex-wrap justify-center gap-4 mb-12 scroll-zoom-in ${
              capabilitiesRef.isVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {[
              { icon: Brain, text: "Consciousness Simulation" },
              { icon: Zap, text: "Quantum Processing" },
              { icon: Sparkles, text: "Predictive Analytics" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 glass-morphism rounded-lg px-4 py-2">
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div 
            ref={buttonsRef.ref}
            className={`flex flex-col sm:flex-row gap-4 justify-center scroll-zoom-in ${
              buttonsRef.isVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <Link to="/dashboard">
              <Button size="lg" className="quantum-gradient text-black font-semibold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300">
                Begin Evolution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/consciousness-simulation">
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-morphism border-accent/30 hover:border-accent px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300"
              >
                Explore Consciousness
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div 
            ref={trustRef.ref}
            className={`mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60 scroll-zoom-in ${
              trustRef.isVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="text-sm">Quantum-Secured</div>
            <div className="w-1 h-1 rounded-full bg-accent"></div>
            <div className="text-sm">GDPR Compliant</div>
            <div className="w-1 h-1 rounded-full bg-accent"></div>
            <div className="text-sm">99.9% Uptime</div>
            <div className="w-1 h-1 rounded-full bg-accent"></div>
            <div className="text-sm">Zero-Knowledge Architecture</div>
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
