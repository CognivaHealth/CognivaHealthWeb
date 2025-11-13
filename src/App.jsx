import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './styles/theme.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

// Add smooth scrolling behavior to the entire app
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // Initialize smooth scrolling for the entire app
  useEffect(() => {
    // Add smooth scrolling to the html element
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
    
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          scroll.scrollTo(targetElement.offsetTop, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
