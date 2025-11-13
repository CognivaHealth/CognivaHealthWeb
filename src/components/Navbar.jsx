import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import vrHeadsetLogo from '../assets/vrheadset.png';

const Avatar = ({ name }) => {
  const initials = (name || 'Dr').slice(0, 2).toUpperCase();
  return <div className="avatar-mini" aria-label="profile">{initials}</div>;
};

const Navbar = () => {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const { pathname } = useLocation();
  const onLogout = () => { logout(); nav('/'); };

  const scrollToTarget = useCallback((targetId) => {
    const header = document.querySelector('.nav');
    const headerHeight = header ? header.offsetHeight : 0;

    const applyOffset = () => {
      if (headerHeight) {
        window.scrollBy({ top: -(headerHeight + 16), behavior: 'smooth' });
      }
    };

    const handleUrl = () => {
      if (targetId) {
        window.history.replaceState({}, '', `/#${targetId}`);
      } else {
        window.history.replaceState({}, '', '/');
      }
    };

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      handleUrl();
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(applyOffset, 150);
      handleUrl();
      return;
    }

    setTimeout(() => {
      const retryElement = document.getElementById(targetId);
      if (retryElement) {
        retryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(applyOffset, 150);
        handleUrl();
      }
    }, 150);
  }, []);

  const handleNavClick = useCallback((event, targetId) => {
    event.preventDefault();

    if (pathname !== '/') {
      nav('/', { state: { targetId } });
      return;
    }

    scrollToTarget(targetId);
  }, [nav, pathname, scrollToTarget]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" onClick={(e) => handleNavClick(e, null)} className="logo">
          <div className="logo-container">
            <div className="logo-icon">
              <img 
                src={vrHeadsetLogo} 
                alt="CognivaHealth VR Headset Logo" 
                width="32" 
                height="32"
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(1.2) contrast(1.5)'
                }}
              />
            </div>

            <span className="logo-text">CognivaHealth</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="nav-link">Home</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="nav-link">Product</a>
          <a href="#overview" onClick={(e) => handleNavClick(e, 'overview')} className="nav-link">Overview</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link">About Us</a>
          
          {user ? (
            <>
              <Avatar name={user.name || user.email} />
              <button className="btn btn-outline" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className="btn btn-outline"
            >
              Contact
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
