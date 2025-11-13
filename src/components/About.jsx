import React from 'react';
import aboutVideo from '../assets/cogniva 2.mp4';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-media glass">
          <video src={aboutVideo} autoPlay muted loop playsInline aria-label="About Cogniva Health video"></video>
        </div>
        <div className="about-copy">
          <h2>About Cogniva Health</h2>
          <p>
            At Cogniva Health we are reimagining how mental health care is delivered.  
            Our mission is to make therapy more immersive, data driven and effective by combining neuroscience, empathy and technology.
          </p>
          <p className="highlight-text">
            We are developing a clinician first VR therapy platform that enables mental health professionals to:
          </p>
          <ul className="feature-list">
            <li>Guide patients through controlled, realistic exposure environments built in Unreal Engine or using filmed real life modules.</li>
            <li>Track physiological data through integrated biosensors that monitor stress, heart rate and relaxation patterns in real time.</li>
            <li>Adapt sessions dynamically if distress exceeds thresholds to ensure safety and comfort.</li>
            <li>Generate AI powered session notes and progress summaries to help therapists measure outcomes objectively.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
