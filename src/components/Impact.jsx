import React from 'react';

const problemStats = [
  {
    value: '10–14%',
    label:
      'of adults in India (~197.3 million) suffer from a diagnosable mental-health disorder',
  },
  {
    value: '8–30%',
    label: 'are receiving treatment (70–92% treatment gap)',
  },
  {
    value: '45–50%',
    label:
      'of needs remained unmet in Clinical Populations according to an Indian Psychiatric Society multicentric study',
  },
];

const Impact = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <h2>PROBLEM:</h2>
        <p className="problem-description">
          Millions of people in India live with treatable mental-health conditions, yet most do not
          receive timely, measurable or clinically appropriate care. This creates a significant
          opportunity for clinician-focused technology that expands access, improves engagement and
          delivers objective outcomes.
        </p>

        <div className="problem-stats">
          {problemStats.map((stat, index) => (
            <div key={index} className="problem-card">
              <div className="problem-value">{stat.value}</div>
              <div className="problem-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
