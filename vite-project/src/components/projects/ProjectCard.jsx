import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] w-full text-left"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
      </div>
    </button>
  );
};

export default ProjectCard;
