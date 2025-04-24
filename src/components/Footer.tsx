
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-career-indigo text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">CareerPathfinder AI</h3>
            <p className="text-sm mt-1">Guiding students to their perfect career match</p>
          </div>
          <div className="flex space-x-6">
            <div>
              <h4 className="font-medium mb-2">Quick Links</h4>
              <ul className="text-sm">
                <li className="mb-1"><a href="/" className="hover:text-career-light-blue">Home</a></li>
                <li className="mb-1"><a href="/about" className="hover:text-career-light-blue">About</a></li>
                <li className="mb-1"><a href="/resources" className="hover:text-career-light-blue">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-6 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CareerPathfinder AI - College Project</p>
          <p className="mt-1">Powered by AI and built with ❤️ for education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
