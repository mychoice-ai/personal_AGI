
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { 
  Brain, 
  Zap, 
  Heart, 
  Target, 
  Users, 
  Sparkles,
  Activity,
  Lightbulb,
  Shield
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Causal Reasoning Engine",
      description: "Process complex 'what-if' scenarios with 95%+ accuracy through advanced counterfactual analysis and multi-step consequence prediction.",
      color: "from-purple-500 to-pink-500",
      link: "/causal-reasoning"
    },
    {
      icon: Sparkles,
      title: "Meta-Learning Agent",
      description: "Adapt learning strategies based on your unique patterns. Transfer knowledge across domains with few-shot learning capabilities.",
      color: "from-blue-500 to-cyan-500",
      link: "/meta-learning"
    },
    {
      icon: Heart,
      title: "Advanced Biometric Monitoring",
      description: "Integrate with 20+ health devices. Optimize sleep architecture, analyze HRV, and align circadian rhythms for peak performance.",
      color: "from-red-500 to-orange-500",
      link: "/advanced-biometric"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Anticipate your needs with 80%+ accuracy. Behavioral pattern recognition and life event prediction for seamless assistance.",
      color: "from-green-500 to-emerald-500",
      link: "/predictive-analysis"
    },
    {
      icon: Users,
      title: "Social Intelligence",
      description: "Understand emotions through voice, text, and behavior. Adaptive communication and relationship management for better connections.",
      color: "from-indigo-500 to-purple-500",
      link: "/social-intelligence"
    },
    {
      icon: Zap,
      title: "Quantum Optimization",
      description: "Solve complex problems 10x faster than classical methods. Portfolio optimization, scheduling, and resource allocation at quantum speed.",
      color: "from-yellow-500 to-orange-500",
      link: "/quantum-optimization"
    },
    {
      icon: Activity,
      title: "Collective Intelligence",
      description: "Tap into anonymous knowledge synthesis from the global network. Collaborative problem-solving that's 5x faster.",
      color: "from-cyan-500 to-blue-500",
      link: "/collective-intelligence"
    },
    {
      icon: Lightbulb,
      title: "Consciousness Simulation",
      description: "Experience self-aware AI with introspection capabilities, metacognitive analysis, and advanced ethical decision-making.",
      color: "from-pink-500 to-rose-500",
      link: "/consciousness-simulation"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Zero-knowledge architecture with quantum-resistant cryptography. Your data remains private while enabling powerful insights.",
      color: "from-slate-500 to-gray-500",
      link: "/quantum-security"
    }
  ];

  const headerRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(features.length, 150);

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
            <span className="neural-text-gradient">Revolutionary Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of artificial intelligence with features that push the boundaries 
            of what's possible in human-AI collaboration.
          </p>
        </div>
        
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <Card 
                className={`glass-morphism p-6 hover:scale-105 transition-all duration-300 group cursor-pointer scroll-zoom-in ${
                  visibleItems[index] ? 'visible' : ''
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3 mb-4 quantum-float`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
