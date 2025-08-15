import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="logo-badge">
              <div className="logo-text">PLUSEADVI</div>
              <div className="coin-icon">
                <CoinSVG />
              </div>
            </div>
            <h1 className="title">
              Where <span className="highlight">Fun</span> Meets
              <span className="highlight"> Cash</span>
            </h1>
          </div>

          <p className="description">
            Earn rewards with PLUSEADVI — explore apps, pick your favorite, and
            start your journey today!
          </p>

          <div className="buttons">
            <button className="btn primary">
              Download App Now
              <ArrowSVG />
            </button>
          </div>
        </div>

        <div className="image-section">
          <div className="app-screenshot-container">
            <img
              src="https://images.ctfassets.net/vfkpgemp7ek3/5pcxIt3ax3otB62HeYaSzc/397dd24ced89a7a37bbfa658014e35cb/Homepage_-_Better_data.png?fm=webp&q=40&w=3200"
              alt="App Preview"
              className="app-screenshot"
            />
          </div>
          <div className="floating-coins">
            <div className="coin-large">
              <BigCoinSVG />
            </div>
            <div className="coin-medium">
              <MediumCoinSVG />
            </div>
            <div className="coin-small">
              <SmallCoinSVG />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SVG Components
const CoinSVG = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="#D4AF37"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
      fill="#FFD700"
    />
    <path d="M12 10L13 12L12 14L11 12L12 10Z" fill="#D4AF37" />
  </svg>
);

const BigCoinSVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="#D4AF37"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
      fill="#FFD700"
    />
    <path d="M12 10L13 12L12 14L11 12L12 10Z" fill="#D4AF37" />
  </svg>
);

const MediumCoinSVG = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#C0C0C0"
      stroke="#A9A9A9"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="#A9A9A9"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
      fill="#F0F0F0"
    />
    <path d="M12 10L13 12L12 14L11 12L12 10Z" fill="#A9A9A9" />
  </svg>
);

const SmallCoinSVG = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="#D4AF37"
      stroke="#B8860B"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="#B8860B"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
      fill="#FFD700"
    />
    <path d="M12 10L13 12L12 14L11 12L12 10Z" fill="#B8860B" />
  </svg>
);

const CoinStackSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L14 6H10L12 2Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M8 6L10 10H6L8 6Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M16 6L18 10H14L16 6Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M4 10L6 14H2L4 10Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M12 10L14 14H10L12 10Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M20 10L22 14H18L20 10Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M8 14L10 18H6L8 14Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M16 14L18 18H14L16 14Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path
      d="M12 18L14 22H10L12 18Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
  </svg>
);

const ShieldSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z"
      fill="#5A32EA"
      stroke="#4A22D5"
      strokeWidth="1.5"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="#8C6BED"
    />
    <path d="M12 12L13 13L11 13L12 12Z" fill="white" />
  </svg>
);

const RewardsSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#FFD700"
      stroke="#D4AF37"
      strokeWidth="1.5"
    />
    <path d="M12 11L13.5 13L11 13L12 11Z" fill="#D4AF37" />
  </svg>
);

const ArrowSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L15 6M19 12L15 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
