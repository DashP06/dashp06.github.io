import React from 'react';

const Navbar = ({ onNavigate, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
        >
          Portfolio
        </button>
        <div className="flex gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className={`${currentView === 'home' ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors font-medium`}
          >
            Home
          </button>
          <button 
            onClick={() => {
              onNavigate('home');
              setTimeout(() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
          >
            Projects
          </button>
          {/* Add more links here as you expand */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
