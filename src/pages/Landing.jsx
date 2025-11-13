import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Impact from '../components/Impact';
import Marquee from '../components/Marquee';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WhyStarted from '../components/WhyStarted';
import Investors from '../components/Investors';
import Overview from '../components/Overview';

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = (targetId) => {
      const header = document.querySelector('.nav');
      const headerHeight = header ? header.offsetHeight : 80;

      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState({}, '', '/');
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        window.history.replaceState({}, '', `/#${targetId}`);
      }
    };

    if (location.state && 'targetId' in location.state) {
      scrollToTarget(location.state.targetId);
    } else if (window.location.hash) {
      scrollToTarget(window.location.hash.replace('#', ''));
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <WhyStarted />
        <Overview />
        <Investors />
        <Impact />
        <Marquee />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
