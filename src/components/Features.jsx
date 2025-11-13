import React from 'react';

const cards = [
  {
    title: 'Guided VR Exposure',
    text:
      'Clinicians guide patients through controlled, realistic exposure environments built in Unreal Engine or using filmed real life modules.',
  },
  {
    title: 'Integrated Biosensing',
    text:
      'Track heart rate, HRV and stress indicators in real time with integrated biosensors.',
  },
  {
    title: 'Adaptive Safety',
    text:
      'If distress exceeds thresholds, sessions adapt dynamically to ensure safety and comfort.',
  },
  {
    title: 'AI Session Summaries',
    text:
      'Generate AI powered session notes and progress summaries to measure outcomes objectively.',
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>We are developing a clinician-first VR therapy platform.</h2>
        <div className="feature-grid">
          {cards.map((c) => (
            <div key={c.title} className="feature-card glow-border">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
