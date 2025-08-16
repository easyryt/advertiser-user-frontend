import React, { useState } from "react";
import styles from "./CashWithdrawalUI.module.css";
import {
  FaGooglePay,
  FaPhone,
  FaUniversity,
  FaStar,
  FaLock,
  FaGift,
  FaHeadset,
} from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

// Star Component
const Star = ({ filled }) => (
  <FaStar
    className={styles.star}
    style={{
      color: filled ? "url(#starFill)" : "#d1d5db",
    }}
  />
);

// Rating Bar
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
      icon: <FaGooglePay size={28} color="#4285F4" />,
      color: "#4285F4",
    },
    {
      name: "PhonePe",
      icon: <FaPhone size={28} color="#5F259F" />,
      color: "#5F259F",
    },
    {
      name: "Paytm",
      icon: <SiPaytm size={28} color="#20336B" />,
      color: "#20336B",
    },
    {
      name: "Bank",
      icon: <FaUniversity size={28} color="#0F9D58" />,
      color: "#0F9D58",
    },
  ];

  const features = [
    {
      title: "100%",
      subtitle: "Secure & Legal",
      icon: <FaLock size={28} color="#3B82F6" />,
      color: "#3B82F6",
    },
    {
      title: "Supreme",
      subtitle: "Cashback",
      icon: <FaGift size={28} color="#8B5CF6" />,
      color: "#8B5CF6",
    },
    {
      title: "Dedicated",
      subtitle: "Support",
      icon: <FaHeadset size={28} color="#EC4899" />,
      color: "#EC4899",
    },
  ];

  return (
    <div className={styles.page}>
      {/* Animated Background */}
      <div className={styles.animatedBackground}></div>

      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Instant Cash Withdrawal</h1>
      </div>

      {/* Payment Methods */}
      <div className={styles.container}>
        <div className={styles.methodsRow}>
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className={`${styles.methodItem} ${
                activeMethod === method.name ? styles.activeMethod : ""
              }`}
              onClick={() => setActiveMethod(method.name)}
              style={{ "--method-color": method.color }}
            >
              <div className={styles.methodIconWrapper}>{method.icon}</div>
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
              style={{ "--feature-color": feature.color }}
            >
              <div className={styles.featureIconWrapper}>{feature.icon}</div>
              <div className={styles.featureText}>
                <div className={styles.featureTitle}>{feature.title}</div>
                <div className={styles.featureSub}>{feature.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>ONLINE CASH GAME REVIEWS</h2>
          <p>What our players say about PLUSEADVI</p>
        </div>

        <div className={styles.reviewsRow}>
          <div className={styles.scoreCard}>
            <div className={styles.bigScore}>
              4.5<span className={styles.scoreTotal}>/5.0</span>
            </div>
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
        <div className={styles.copyright}>
          © 2023 PLUSEADVI. All rights reserved.
        </div>
      </div>
    </div>
  );
}
