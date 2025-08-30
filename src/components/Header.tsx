import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import AuthButton from './AuthButton';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-accent/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg quantum-gradient p-2">
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <span className="text-xl font-bold neural-text-gradient">AGI Misao</span>
          </Link>

          {/* Auth Buttons */}
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default Header;