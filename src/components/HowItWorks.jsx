import React from 'react';

const HowItWorks = () => (
  <section id="how-it-works" className="features">
    <div className="container">
      <h2>How It Works</h2>
      <div className="feature-grid">
        <div className="feature-card glow-border">
          <h3>1. Setup</h3>
          <p>The clinician opens our dashboard and selects the appropriate therapy module, for example anxiety or OCD.</p>
        </div>
        <div className="feature-card glow-border">
          <h3>2. Immersion</h3>
          <p>The patient wears the VR headset and experiences a guided environment that mirrors real life triggers under controlled conditions.</p>
        </div>
        <div className="feature-card glow-border">
          <h3>3. Biosensing Feedback</h3>
          <p>Our sensor suite tracks heart rate, HRV and stress indicators in real time.</p>
        </div>
        <div className="feature-card glow-border">
          <h3>4. Adaptive Response</h3>
          <p>If stress crosses a defined threshold, the system transitions to a calming simulation to support emotional regulation.</p>
        </div>
        <div className="feature-card glow-border">
          <h3>5. Session Summary</h3>
          <p>After therapy, our AI generates structured session notes and progress reports, helping clinicians refine treatment and monitor improvement.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
