import React from 'react';
import './Overview.css';

const Overview = () => (
  <section id="overview" className="overview">
    <div className="container">
      <div className="overview-orbit">
        <div className="overview-center">
          <h2 className="overview-title">Overview</h2>
          <p className="overview-subtitle">A snapshot of our focus, impact and vision — combined in one clear view.</p>
        </div>

        <div className="orbit-item pos-1" data-n="1">
          <h3 className="orbit-item-title">Our Focus Areas</h3>
          <p className="orbit-item-text">
            We are starting with OCD and anxiety disorders, conditions where symptoms are measurable, therapy protocols are well defined and clinical research is strong. These use cases provide a clear path for validation before expanding into depression, PTSD and broader wellness applications.
          </p>
        </div>

        <div className="orbit-item pos-2" data-n="2">
          <h3 className="orbit-item-title">Why It Matters</h3>
          <div className="orbit-item-text">
            <p><strong>For clinicians:</strong> Objective progress tracking, realistic therapy environments and adaptive patient management.</p>
            <p><strong>For patients:</strong> More engaging, stigma free and personalised therapy experiences.</p>
            <p><strong>For the ecosystem:</strong> Bridging the gap between technology, empathy and clinical science.</p>
          </div>
        </div>

        <div className="orbit-item pos-3" data-n="3">
          <h3 className="orbit-item-title">Built for Impact</h3>
          <p className="orbit-item-text">
            Our platform is designed for clinics, hospitals, therapy chains and in the future corporate wellness programmes and high end community wellness spaces. We believe in accessibility and affordability, making advanced digital therapy tools viable for India's healthcare landscape.
          </p>
        </div>

        <div className="orbit-item pos-4" data-n="4">
          <h3 className="orbit-item-title">Our Vision</h3>
          <p className="orbit-item-text vision-text">
            To make mental health care measurable, immersive and stigma free, guided by science and powered by empathy.
          </p>
        </div>

        <div className="orbit-item pos-5" data-n="5">
          <h3 className="orbit-item-title">Disclaimer</h3>
          <p className="orbit-item-text disclaimer-text">
            Cogniva Health is currently under research and validation. Our product is not yet intended for clinical or commercial use. The content presented here is for informational purposes only and does not constitute medical advice or diagnosis.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Overview;
