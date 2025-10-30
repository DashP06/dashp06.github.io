import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Your Name
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
          Developer, Designer, Creator
        </p>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences through code and design
        </p>
        <div className="mt-12">
          <button 
            onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
