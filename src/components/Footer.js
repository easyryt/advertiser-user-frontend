import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Kindly enter a valid email");
    } else {
      setError("");
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <p className={styles.smallText}>A part of</p>
           PLUSEADVIe
        </div>

        <div className={styles.links}>
          <h4>QUICK LINKS</h4>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Rewards</a>
          <a href="#">About Us</a>
        </div>

        <div className={styles.links}>
          <h4>WORK</h4>
          <a href="#">Partnership</a>
          <a href="#">Publish With Us</a>
          <a href="#">Careers</a>
        </div>

        <div className={styles.links}>
          <h4>SOCIAL MEDIA</h4>
          <a href="#">Youtuber's</a>
        </div>

        <div className={styles.newsletter}>
          <h4>Subscribe to our newsletter</h4>
          <input
            type="email"
            placeholder="Your email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>
          Have any other queries? <br />
          Mail us at <a href="mailto:contact@loftlime.com">contact@loftlime.com</a>
        </p>
        <p>
          © 2025 LeadMint Technologies Pvt Ltd. All Rights Reserved.
        </p>
        <div className={styles.policyLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
