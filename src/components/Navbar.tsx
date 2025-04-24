
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
