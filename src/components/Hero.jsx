import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroVideo from '../assets/cogniva 1.mp4';

const Hero = () => {
  const nav = useNavigate();
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy fade-in">
          <h1>Immersive technology for better therapy.</h1>
          <p>Science. Empathy. Balance.</p>
          <p>
            We are building an intelligent VR tool that help clinicians deliver measurable, adaptive, and science driven mental health care.
          </p>
          <div className="cta-row">
            <button onClick={() => nav('/dashboard')} className="btn btn-primary glow">Get Started</button>
          </div>
        </div>
        <div className="hero-media">
          <div className="media-card glass">
            <video src={heroVideo} autoPlay muted loop playsInline aria-label="Cogniva Health VR therapy demo"></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
