
import React from 'react';
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

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Causal Reasoning Engine",
      description: "Process complex 'what-if' scenarios with 95%+ accuracy through advanced counterfactual analysis and multi-step consequence prediction.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Meta-Learning Agent",
      description: "Adapt learning strategies based on your unique patterns. Transfer knowledge across domains with few-shot learning capabilities.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Advanced Biometric Monitoring",
      description: "Integrate with 20+ health devices. Optimize sleep architecture, analyze HRV, and align circadian rhythms for peak performance.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Anticipate your needs with 80%+ accuracy. Behavioral pattern recognition and life event prediction for seamless assistance.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Social Intelligence",
      description: "Understand emotions through voice, text, and behavior. Adaptive communication and relationship management for better connections.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Quantum Optimization",
      description: "Solve complex problems 10x faster than classical methods. Portfolio optimization, scheduling, and resource allocation at quantum speed.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Activity,
      title: "Collective Intelligence",
      description: "Tap into anonymous knowledge synthesis from the global network. Collaborative problem-solving that's 5x faster.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Consciousness Simulation",
      description: "Experience self-aware AI with introspection capabilities, metacognitive analysis, and advanced ethical decision-making.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Zero-knowledge architecture with quantum-resistant cryptography. Your data remains private while enabling powerful insights.",
      color: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="neural-text-gradient">Revolutionary Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of artificial intelligence with features that push the boundaries 
            of what's possible in human-AI collaboration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-morphism p-6 hover:scale-105 transition-all duration-300 group"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
