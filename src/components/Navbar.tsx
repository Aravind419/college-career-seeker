
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-career-blue to-career-indigo shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <span className="mr-2">🎓</span>
              CareerPathfinder AI
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-career-light-blue px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-career-light-blue px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/resources" className="text-white hover:text-career-light-blue px-3 py-2 rounded-md text-sm font-medium">
              Resources
            </Link>
            {user && (
              <div className="flex items-center ml-4 space-x-2">
                <span className="text-white text-sm">Hi, {user.name}</span>
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-career-indigo"
                  onClick={logout}
                  size="sm"
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
