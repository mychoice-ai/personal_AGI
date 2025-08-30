import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const AuthButton = () => {
  const { user, signOut, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  if (loading) {
    return (
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 glass-morphism rounded-lg px-3 py-2">
          <User className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium truncate max-w-32">
            {user.user_metadata?.name || user.email}
          </span>
        </div>
        <Button
          onClick={handleSignOut}
          variant="outline"
          size="sm"
          className="glass-morphism border-accent/30 hover:border-accent"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <Link to="/auth">
        <Button
          variant="outline"
          className="glass-morphism border-accent/30 hover:border-accent"
        >
          Sign In
        </Button>
      </Link>
      <Link to="/auth">
        <Button className="quantum-gradient text-black font-semibold hover:scale-105 transition-all duration-300">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default AuthButton;