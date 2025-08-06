
import React from 'react';
import { Brain, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold neural-text-gradient">AGI Misao</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The world's first true artificial general intelligence companion. 
              Evolving alongside humanity to unlock infinite potential.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 glass-morphism rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Documentation', 'API', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AGI Misao. All rights reserved. Built for the future of human-AI collaboration.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500 synapse-glow"></div>
              <span className="text-sm text-muted-foreground">AGI Status: Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
