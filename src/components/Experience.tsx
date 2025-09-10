
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, User, Briefcase, Heart, Rocket } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const personas = [
    {
      icon: Briefcase,
      name: "Optimization Oliver",
      role: "Tech Professional",
      description: "Maximize productivity, optimize health, advance career through AI-powered insights and scheduling.",
      benefits: ["50% faster decision making", "25% better work-life balance", "40% improved health metrics"],
      link: "/personas/optimization-oliver"
    },
    {
      icon: Rocket,
      name: "Creative Chloe", 
      role: "Artistic Professional",
      description: "Enhance creativity, manage projects, build reputation with AI-driven inspiration and market analysis.",
      benefits: ["60% more creative ideas", "30% faster project completion", "45% better portfolio performance"],
      link: "/personas/creative-chloe"
    },
    {
      icon: Heart,
      name: "Wellness William",
      role: "Health Enthusiast", 
      description: "Optimize health, prevent disease, enhance longevity through comprehensive biometric monitoring.",
      benefits: ["25% improvement in health metrics", "90% better sleep quality", "35% reduced stress levels"],
      link: "/personas/wellness-william"
    },
    {
      icon: User,
      name: "Entrepreneur Emma",
      role: "Startup Founder",
      description: "Scale business, make optimal decisions, maintain health under stress with strategic AI guidance.",
      benefits: ["3x better strategic decisions", "50% reduced decision fatigue", "40% improved team productivity"],
      link: "/personas/entrepreneur-emma"
    }
  ];

  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(personas.length, 200);
  const ctaRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef.ref}
          className={`text-center mb-16 scroll-zoom-in ${
            headerRef.isVisible ? 'visible' : ''
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neural-text-gradient">Personalized for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AGI Misao adapts to your unique needs, goals, and lifestyle. 
            See how it transforms lives across different personas.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {personas.map((persona, index) => (
            <Link key={index} to={persona.link}>
              <Card 
                className={`glass-morphism p-8 hover:scale-105 transition-all duration-300 cursor-pointer scroll-zoom-in ${
                  visibleItems[index] ? 'visible' : ''
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg quantum-gradient p-3">
                    <persona.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{persona.name}</h3>
                    <p className="text-accent font-medium">{persona.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {persona.description}
                </p>
                
                <div className="space-y-3">
                  {persona.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent synapse-glow"></div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div 
          ref={ctaRef.ref}
          className={`text-center scroll-zoom-in ${
            ctaRef.isVisible ? 'visible' : ''
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="glass-morphism rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Evolution?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands who have already transformed their lives with AGI Misao. 
              Your personalized AI companion is waiting.
            </p>
            
            <Link to="/trial-signup">
              <Button size="lg" className="quantum-gradient text-black font-semibold px-12 py-4 rounded-xl hover:scale-105 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
