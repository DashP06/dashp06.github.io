import React from 'react';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/projects';

const Projects = ({ onProjectClick }) => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => onProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
