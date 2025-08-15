import React, { useState } from "react";
import styles from "./CashWithdrawalUI.module.css";

const Star = ({ filled }) => (
  <svg viewBox="0 0 20 20" className={styles.star} aria-hidden="true">
    <path d="M10 1.5l2.472 5.007 5.528.804-4 3.898.944 5.508L10 14.95l-4.944 1.767.944-5.508-4-3.898 5.528-.804L10 1.5z" />
    <defs>
      <linearGradient id="starFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
);

const RatingBar = ({ label, percent }) => (
  <div className={styles.ratingRow}>
    <span className={styles.ratingLabel}>{label}</span>
    <div className={styles.ratingTrack}>
      <div 
        className={styles.ratingFill} 
        style={{ width: `${percent}%` }}
        data-percent={percent}
      />
    </div>
    <span className={styles.ratingPercent}>{percent}%</span>
  </div>
);

export default function CashWithdrawalUI() {
  const [activeMethod, setActiveMethod] = useState("Google pay");
  
  const paymentMethods = [
    { 
      name: "Google pay", 
      icon: "https://static-perf1.PLUSEADVI.com/wp-content/uploads/2024/03/money-earning-games-withdrawal-gpay.webp",
      color: "#4285F4"
    },
    { 
      name: "PhonePe", 
      icon: "https://static-perf1.PLUSEADVI.com/wp-content/uploads/2024/03/money-earning-games-withdrawal-phonepay.webp",
      color: "#5F259F"
    },
    { 
      name: "Paytm", 
      icon: "https://static-perf1.PLUSEADVI.com/wp-content/uploads/2024/03/money-earning-games-withdrawal-paytm.webp",
      color: "#20336B"
    },
    { 
      name: "Bank", 
      icon: "https://static-perf1.PLUSEADVI.com/wp-content/uploads/2024/03/money-earning-games-withdrawal-bank-transfer.webp",
      color: "#0F9D58"
    }
  ];
  
  const features = [
    {
      title: "100%",
      subtitle: "Secure & Legal",
      icon: "https://static-perf1.PLUSEADVI.com/blog-images/uploads/2024/10/real-cash-games-online-rating.webp",
      color: "#3B82F6"
    },
    {
      title: "Supreme",
      subtitle: "Cashback",
      icon: "https://static-perf1.PLUSEADVI.com/blog-images/uploads/2025/01/cashback-referral-PLUSEADVI.webp",
      color: "#8B5CF6"
    },
    {
      title: "Dedicated",
      subtitle: "Support",
      icon: "https://static-perf1.PLUSEADVI.com/blog-images/uploads/2025/01/ludo-online-games-offer-dedicated-customer-service.webp",
      color: "#EC4899"
    }
  ];

  return (
    <div className={styles.page}>
      {/* Animated Background */}
      <div className={styles.animatedBackground}></div>
      
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>Z</div>
          <span>PLUSEADVI</span>
        </div>
        <h1 className={styles.headerTitle}>Instant Cash Withdrawal</h1>
      </div>
      
      {/* Payment Methods */}
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Withdraw to</h2>
          <p>Select your preferred payment method</p>
        </div>
        
        <div className={styles.methodsRow}>
          {paymentMethods.map((method, index) => (
            <div 
              key={index} 
              className={`${styles.methodItem} ${activeMethod === method.name ? styles.activeMethod : ''}`}
              onClick={() => setActiveMethod(method.name)}
              style={{ '--method-color': method.color }}
            >
              <div className={styles.methodIconWrapper}>
                <img
                  alt={method.name}
                  className={styles.methodLogo}
                  src={method.icon}
                />
              </div>
              <span className={styles.methodText}>{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>WHY PLAY REAL CASH WITHDRAWAL GAMES</h2>
          <p>Experience the premium PLUSEADVI advantage</p>
        </div>

        <div className={styles.featuresWrap}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.featureItem}
              style={{ '--feature-color': feature.color }}
            >
              <div className={styles.featureIconWrapper}>
                <img
                  alt={feature.subtitle}
                  className={styles.featureIcon}
                  src={feature.icon}
                />
              </div>
              <div className={styles.featureText}>
                <div className={styles.featureTitle}>{feature.title}</div>
                <div className={styles.featureSub}>{feature.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Badge */}
      <div className={styles.container}>
        <div className={styles.badgeCard}>
          <div className={styles.badgeCircle}>
            <svg viewBox="0 0 24 24" className={styles.badgeShield} aria-hidden="true">
              <path d="M12 1.75l8 4v5.25c0 5.25-3.42 10.08-8 11.25-4.58-1.17-8-6-8-11.25V5.75l8-4zm0 6.5a.75.75 0 00-.75.75v3.25H8.5a.75.75 0 000 1.5h2.75V17a.75.75 0 001.5 0v-3.25H15.5a.75.75 0 000-1.5h-2.75V9a.75.75 0 00-.75-.75z" />
            </svg>
          </div>
          <div className={styles.badgeContent}>
            <p className={styles.badgeTitle}>100% Safe Cash Withdrawals</p>
            <p className={styles.badgeText}>Bank-level security & encrypted transactions</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>ONLINE CASH GAME REVIEWS</h2>
          <p>What our players say about PLUSEADVI</p>
        </div>

        <div className={styles.reviewsGrid}>
          <div className={styles.scoreCard}>
            <div className={styles.bigScore}>4.5<span className={styles.scoreTotal}>/5.0</span></div>
            <div className={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} filled={n <= 4} />
              ))}
            </div>
            <div className={styles.reviewCount}>827,911 Reviews</div>
            <div className={styles.ratingBadge}>Excellent</div>
          </div>

          <div className={styles.barsCard}>
            <RatingBar label={5} percent={95} />
            <RatingBar label={4} percent={70} />
            <RatingBar label={3} percent={45} />
            <RatingBar label={2} percent={25} />
            <RatingBar label={1} percent={8} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h3>Ready to Withdraw?</h3>
          <p>Join millions of players enjoying instant cash withdrawals</p>
          <button className={styles.ctaButton}>Withdraw Now</button>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </div>
        <div className={styles.copyright}>© 2023 PLUSEADVI. All rights reserved.</div>
      </div>
    </div>
  );
}