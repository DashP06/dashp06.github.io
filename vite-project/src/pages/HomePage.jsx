import React from 'react';
import Hero from '../components/home/Hero';
import Details from '../components/home/Details';
import Projects from '../components/home/Projects';

const HomePage = ({ onProjectClick }) => {
  return (
    <>
      <Hero />
      <Details />
      <Projects onProjectClick={onProjectClick} />
    </>
  );
};

export default HomePage;
