import React from 'react';
import { projects } from '../../data/projects';

const ProjectPage = ({ projectId, onBack }) => {
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button 
            onClick={onBack}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="text-blue-400 hover:text-blue-300 transition-colors mb-8 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>
        
        <h1 className="text-6xl font-bold text-white mb-8">{project.title}</h1>
        
        <div className="rounded-lg overflow-hidden mb-12 border border-gray-800">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
            <p className="text-xl text-gray-400 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(tech => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-blue-400 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
