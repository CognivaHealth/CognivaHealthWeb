import React from 'react';

const LinkedInIcon = ({ title = 'LinkedIn' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={title}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.24 8.98H4.76V24H0.24V8.98ZM8.98 8.98H13.28V11.02H13.36C13.96 9.98 15.56 8.86 17.8 8.86C22.2 8.86 24 11.32 24 15.64V24H19.48V16.72C19.48 14.98 19.44 12.76 17.08 12.76C14.68 12.76 14.24 14.54 14.24 16.58V24H9.72V8.98H8.98Z" fill="currentColor"/>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="/" className="logo logo--invert" aria-label="CognivaHealth home">CognivaHealth</a>

          <address className="footer-contact" aria-label="Contact information">
            <div>Bengaluru, India</div>
            <div>
              Email: <a href="mailto:admin@cognivahealth.in">admin@cognivahealth.in</a>
            </div>
          </address>

          <div className="socials" aria-label="Social links">
            <a href="https://www.linkedin.com/company/cogniva-health/about/" target="_blank" rel="noopener noreferrer" aria-label="CognivaHealth on LinkedIn" title="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div>Science. Empathy. Balance.</div>
        <div>© {year} Cogniva Health · Prototype · All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
