import React, { useState, useEffect } from "react";
import whyImg from "../assets/cogniva P 1.png";

const WhyStarted = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Inject CSS styles dynamically (self-contained component)
    const styleId = "why-started-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      /* === Section Layout === */
      .why-started {
        padding: 120px 0 100px;
        background: linear-gradient(180deg, #0a192f 0%, #112240 100%);
        font-family: 'Inter', sans-serif;
        color: #ccd6f6;
      }

      .why-started .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
      }

      /* === Hero Section === */
      .hero-section {
        text-align: center;
        padding: 80px 0;
        position: relative;
        background: rgba(10, 25, 47, 0.8);
        border-radius: 24px;
        margin: 20px 0 60px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(100, 255, 218, 0.1);
        backdrop-filter: blur(10px);
      }
      
      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(14, 165, 198, 0.03) 0%, transparent 40%);
        pointer-events: none;
      }
      
      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, #0ea5c6, #3b82f6, #0ea5c6);
      }

      .why-header::before {
        content: '';
        display: block;
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #0ea5c6, #3b82f6);
        margin: 0 auto 30px;
        border-radius: 2px;
      }

      .hero-content {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 30px;
        position: relative;
        z-index: 1;
      }

      .hero-tag {
        display: inline-block;
        background: rgba(100, 255, 218, 0.1);
        color: #64ffda;
        font-weight: 600;
        padding: 8px 24px;
        border-radius: 50px;
        margin-bottom: 20px;
        font-size: 0.95rem;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        border: 1px solid rgba(100, 255, 218, 0.2);
      }

      .hero-content h1 {
        font-size: 3.25rem;
        margin: 0 auto 1.5rem;
        font-weight: 700;
        line-height: 1.2;
        max-width: 900px;
        background: linear-gradient(90deg, #64ffda 0%, #00c6ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -0.5px;
        padding: 0 20px;
        position: relative;
        z-index: 1;
      }
      
      .hero-content h1::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 4px;
        background: linear-gradient(90deg, #0ea5c6, #3b82f6);
        border-radius: 2px;
        opacity: 0.8;
      }
      
      .hero-divider {
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, 
          rgba(14, 165, 198, 0.5) 0%, 
          rgba(59, 130, 246, 0.8) 50%, 
          rgba(14, 165, 198, 0.5) 100%);
        margin: 40px auto;
        border-radius: 50%;
        opacity: 0.8;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }
      
      .hero-divider::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
          transparent, 
          rgba(255, 255, 255, 0.7), 
          transparent);
        animation: shine 2s infinite;
      }
      
      @keyframes shine {
        100% {
          left: 100%;
        }
      }
      
      .hero-section:hover .hero-divider {
        width: 150px;
        opacity: 1;
        transform: scaleY(1.5);
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        color: #8892b0;
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.7;
        font-weight: 400;
        letter-spacing: 0.2px;
        padding: 0 20px;
      }

      .why-header p {
        font-size: 1.3rem;
        color: #475569;
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.8;
        font-weight: 400;
        position: relative;
        display: inline-block;
      }

      .why-header p::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 40%;
        height: 2px;
        background: linear-gradient(90deg, #e0f2fe, #3b82f6, #e0f2fe);
        opacity: 0.7;
      }

      /* === Grid Layout === */
      /* Mission Section */
      .mission-section {
        max-width: 1200px;
        margin: 0 auto 80px;
        padding: 0 30px;
        position: relative;
      }
      
      .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        position: relative;
        padding-left: 80px;
      }
      
      .section-number {
        position: absolute;
        left: 0;
        font-size: 4rem;
        font-weight: 800;
        color: rgba(100, 255, 218, 0.07);
        z-index: -1;
        line-height: 1;
      }
      
      .section-header h2 {
        font-size: 2.5rem;
        color: #e6f1ff;
        margin: 0;
        position: relative;
        background: linear-gradient(90deg, #64ffda 0%, #00c6ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .mission-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 40px;
      }
      
      .mission-card {
        background: rgba(21, 40, 69, 0.5);
        border-radius: 16px;
        padding: 30px 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(100, 255, 218, 0.1);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 200px;
      }
      
      .mission-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 198, 255, 0.2);
        border-color: rgba(100, 255, 218, 0.3);
      }
      
      .mission-card.highlight {
        background: linear-gradient(135deg, #00c6ff 0%, #0078ff 100%);
        color: #e6f1ff;
        border-color: rgba(0, 198, 255, 0.3);
      }
      
      .mission-card.highlight h3,
      .mission-card.highlight p {
        color: white;
      }
      
      .mission-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      }
      
      
      .mission-card h3 {
        font-size: 1.4rem;
        margin: 0 0 12px;
        color: #e6f1ff;
        position: relative;
        padding-bottom: 10px;
      }
      
      .mission-card h3::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, #64ffda 0%, #00c6ff 100%);
      }
      
      .mission-card p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #8892b0;
        margin: 0;
      }

      .mission-content::before {
        content: '';
        position: absolute;
        top: -30px;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
      }

      .mission-content h2 {
        font-size: 2.5rem;
        color: #1e293b;
        margin: 0 auto 2rem;
        font-weight: 700;
        position: relative;
        display: inline-block;
        padding: 0 20px;
      }

      .mission-content h2::before,
      .mission-content h2::after {
        content: '•';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #3b82f6;
        font-size: 1.5rem;
      }

      .mission-content h2::before {
        left: -10px;
      }

      .mission-content h2::after {
        right: -10px;
      }

      .mission-content p {
        font-size: 1.2rem;
        line-height: 1.9;
        color: #475569;
        margin: 0 auto 2rem;
        max-width: 800px;
        font-weight: 400;
      }

      .mission-content p:last-of-type {
        position: relative;
        padding: 20px;
        background-color: #f8fafc;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        border-left: 4px solid #3b82f6;
      }

      .why-content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto 80px;
        max-width: 1400px;
        padding: 0 20px;
        position: relative;
      }

      @media (max-width: 900px) {
        .why-content {
          grid-template-columns: 1fr;
        }
      }

      /* === Text Content === */
      .why-text h2 {
        color: #0b2540;
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .why-text p {
        color: #415a77;
        font-size: 1.05rem;
        line-height: 1.8;
        margin-bottom: 20px;
      }


      /* === Image Box === */
      .why-image-box {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        z-index: 1;
        border: 1px solid rgba(100, 255, 218, 0.2);
        background: rgba(21, 40, 69, 0.5);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
      }

      .why-image-box:hover {
        box-shadow: 0 30px 60px rgba(0, 198, 255, 0.2);
        transform: translateY(-5px) scale(1.02);
        border-color: rgba(100, 255, 218, 0.4);
      }

      .why-image-box:hover {
        transform: scale(1.03);
      }

      .why-image-box img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 20px;
        max-height: 85vh;
        min-height: 500px;
        object-fit: contain;
        object-position: center;
      }

      .image-overlay {
        position: absolute;
        inset: 0;
        background: rgba(14, 165, 198, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .why-image-box:hover .image-overlay {
        opacity: 1;
      }

      .image-overlay span {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 0.95rem;
      }

      /* === Modal === */
      .image-modal {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease-out;
      }

      .modal-content {
        position: relative;
        max-width: 95%;
        max-height: 95vh;
        width: auto;
        height: auto;
      }

      .modal-image {
        max-width: 95vw;
        max-height: 90vh;
        border-radius: 16px;
        box-shadow: 0 15px 60px rgba(0, 0, 0, 0.6);
        border: 15px solid #fff;
        background: #fff;
      }

      .close-button {
        position: absolute;
        top: -15px;
        right: -15px;
        background: #0ea5c6;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s;
      }

      .close-button:hover {
        background: #0b8aa7;
        transform: scale(1.1);
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="why-started">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section" data-aos="fade-up">
          <div className="hero-content">
            <div className="hero-tag">Innovation in Mental Healthcare</div>
            <h1>Clinician-First VR Therapy Platform</h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">
              Revolutionizing mental healthcare through immersive, evidence-based
              virtual reality solutions that empower clinicians and transform patient outcomes
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section" data-aos="fade-up" data-aos-delay="100">
          <div className="section-header">
            <div className="section-number">01</div>
            <h2>Our Mission</h2>
          </div>
          
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Immersive VR Therapy</h3>
              <p>Guided exposure therapy in controlled virtual environments for effective treatment.</p>
            </div>
            <div className="mission-card">
              <h3>Real-time Monitoring</h3>
              <p>Track patient progress with integrated biosensors and AI-powered analytics.</p>
            </div>
            <div className="mission-card highlight">
              <h3>Clinician First</h3>
              <p>Designed by therapists, for therapists - putting clinical expertise first.</p>
            </div>
            <div className="mission-card">
              <h3>Neuroscience-Backed</h3>
              <p>Evidence-based protocols built on the latest research in mental health.</p>
            </div>
            <div className="mission-card">
              <h3>Personalized Care</h3>
              <p>Adaptive therapy sessions tailored to each patient's needs and progress.</p>
            </div>
            <div className="mission-card">
              <h3>Proven Results</h3>
              <p>Clinically validated outcomes and measurable improvements in patient care.</p>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="why-content" style={{
          marginTop: '40px',
          marginBottom: '100px'
        }}>
          <div className="why-image-box">
            <img 
              src={whyImg} 
              alt="VR Therapy Platform"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '20px',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>


        {/* Image Modal */}
        {isModalOpen && (
          <div className="image-modal" onClick={() => setIsModalOpen(false)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={whyImg}
                alt="VR Therapy Platform"
                className="modal-image"
              />
              <button
                className="close-button"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyStarted;
