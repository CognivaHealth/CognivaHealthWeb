import React, { useEffect } from "react";

const Investors = () => {
  useEffect(() => {
    const styleId = "investors-styles";
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      /* === INVESTORS SECTION === */
      .investors {
        padding: 100px 0;
        background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
        position: relative;
        overflow: hidden;
        font-family: 'Inter', sans-serif;
      }

      .investors::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 10%, rgba(14, 165, 198, 0.08), transparent 70%);
        pointer-events: none;
      }

      .investors .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 24px;
        position: relative;
        z-index: 2;
      }

      .investors-content {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        padding: 60px 50px;
        text-align: center;
        border: 1px solid rgba(14, 165, 198, 0.1);
        transition: all 0.3s ease;
      }

      .investors-content:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px rgba(14, 165, 198, 0.15);
      }

      .investors-content h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0b2540;
        margin-bottom: 20px;
        line-height: 1.2;
      }

      .investors-content p {
        font-size: 1.1rem;
        color: #44546a;
        line-height: 1.8;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .investors-highlight {
        color: #0ea5c6;
        font-weight: 600;
      }

      /* === BUTTON === */
      .investors-btn {
        display: inline-block;
        margin-top: 20px;
        padding: 14px 32px;
        border-radius: 50px;
        background: linear-gradient(135deg, #0ea5c6, #0b8aa7);
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        font-size: 1.05rem;
        box-shadow: 0 10px 25px rgba(14, 165, 198, 0.25);
        transition: all 0.3s ease;
      }

      .investors-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 35px rgba(14, 165, 198, 0.35);
        background: linear-gradient(135deg, #0b8aa7, #0ea5c6);
      }

      /* === DECORATIVE ACCENTS === */
      .investors::after {
        content: "";
        position: absolute;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(14, 165, 198, 0.06), transparent 70%);
        z-index: 0;
      }

      /* === RESPONSIVE === */
      @media (max-width: 768px) {
        .investors-content {
          padding: 40px 24px;
        }

        .investors-content h2 {
          font-size: 2rem;
        }

        .investors-content p {
          font-size: 1rem;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section id="investors" className="investors">
      <div className="container">
        <div className="investors-content">
          <h2>For Investors</h2>
          <p>
            <span className="investors-highlight">Cogniva Health</span> is
            currently raising a <strong>₹10 Lakh Pre-Seed Round</strong> to
            validate our VR-based therapy platform through{" "}
            <strong>clinical pilots</strong>. Our clinician dashboard and AI
            workflow engine are under development, and this funding will enable
            hardware procurement, sensor integration, and real-world testing.
          </p>

          <a
            className="investors-btn"
            href="/cognivahealth%20pitch%20deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              const pdfUrl = "/cognivahealth%20pitch%20deck.pdf";
              // Open the PDF in a new tab for viewing
              window.open(pdfUrl, "_blank");
              // Also trigger download
              const link = document.createElement("a");
              link.href = pdfUrl;
              link.download = "CognivaHealth-Investor-Deck.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            📄 Download Investor Deck
          </a>

        </div>
      </div>
    </section>
  );
};

export default Investors;
