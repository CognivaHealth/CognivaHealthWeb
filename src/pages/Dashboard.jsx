import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'product', label: 'Product' },
  { id: 'research', label: 'Research' },
  { id: 'about', label: 'About Us' },
];

const Dashboard = () => {
  const [active, setActive] = useState('home');

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <aside className="sidebar">
          <div className="sidebar-title">Dashboard</div>
          <nav className="sidebar-links">
            {tabs.map(t => (
              <button
                key={t.id}
                className={`sidebar-link ${active === t.id ? 'active' : ''}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </aside>
        <main className="dash-content">
          {active === 'home' && (
            <section className="card glass">
              <h2>Welcome</h2>
              <p className="muted">Start from the left to explore modules.</p>
            </section>
          )}
          {active === 'product' && (
            <section className="card glass">
              <h2>Product</h2>
              <p className="muted">Manage therapy protocols, sessions, and analytics.</p>
            </section>
          )}
          {active === 'research' && (
            <section className="card glass">
              <h2>Research</h2>
              <p className="muted">Pipelines for datasets, studies, and outcomes.</p>
            </section>
          )}
          {active === 'about' && (
            <section className="card glass">
              <h2>About Us</h2>
              <p className="muted">CognivaHealth — advancing healthcare with AI and VR.</p>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
