import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './components/projects/ProjectPage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setCurrentView('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      {currentView === 'home' && <HomePage onProjectClick={handleProjectClick} />}
      {currentView === 'project' && <ProjectPage projectId={selectedProject} onBack={handleBack} />}
    </div>
  );
}

export default App;
