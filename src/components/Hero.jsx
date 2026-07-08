import React from 'react';
import Waveform from './Waveform';

const Hero = ({ onNavigate }) => {
  return (
    <section id="home">
      <div className="hero-content">
        <div className="hero-subtitle">Sound Designer & Audio Engineer</div>
        <h1 className="hero-title">AC SOUND DESIGN</h1>
        <p className="hero-description">
          Specializing in dialogue editing and audio production for short, 
          engaging videos. Transforming raw audio into immersive sonic experiences.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => onNavigate('portfolio')}>
            View Work
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('contact')}>
            Get In Touch
          </button>
        </div>
      </div>
      
      <Waveform />
    </section>
  );
};

export default Hero;
