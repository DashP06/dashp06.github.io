import React from 'react';

const Details = () => {
  return (
    <section id="details" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-4xl">
        <h2 className="text-5xl font-bold text-white mb-12">About Me</h2>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            I'm a passionate developer with a keen eye for design and a love for building things that matter. 
            My journey in tech has been driven by curiosity and a desire to create meaningful solutions.
          </p>
          <p>
            With expertise in modern web technologies and a focus on user experience, I bring ideas to life 
            through clean code and thoughtful design. Every project is an opportunity to learn, grow, and push 
            the boundaries of what's possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-colors">
              <h3 className="text-white font-bold text-xl mb-2">Development</h3>
              <p className="text-gray-500">Building scalable applications with modern frameworks</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-colors">
              <h3 className="text-white font-bold text-xl mb-2">Design</h3>
              <p className="text-gray-500">Creating intuitive and beautiful user interfaces</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-400/50 transition-colors">
              <h3 className="text-white font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-500">Exploring new technologies and approaches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
