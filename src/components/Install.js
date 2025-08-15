import React from "react";
import styles from "./Install.module.css";

const Install = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>HOW TO INSTALL PLUSEADVI GAMING APP</h2>
      <p className={styles.text}>
        Steps to install the PLUSEADVI money game app and start winning{" "}
        <span className={styles.more}>...more</span>
      </p>
      <p className={styles.subtext}>
        On completion of these steps, all you have to do is sign up and start
        playing your chosen money winning games like Ludo, Trump Cards, and
        more!
      </p>

      <div className={styles.steps}>
        <div className={styles.card}>
          <span className={styles.number}>1</span>
          <p className={styles.stepText}>
            Click on the <strong>“Download App”</strong> button.
          </p>
          <img
            src="https://static-perf1.PLUSEADVI.com/blog-images/uploads/2024/11/real-money-game-download-step-1.webp"
            alt="Step 1"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <span className={styles.number}>2</span>
          <p className={styles.stepText}>
            On your screen, tap <strong>Download Anyway</strong> <br />
            <span className={styles.lightText}>
              Our files are not harmful, we promise
            </span>
          </p>
          <img
            src="https://static-perf1.PLUSEADVI.com/blog-images/uploads/2024/11/real-money-game-download-step-2.webp"
            alt="Step 2"
            className={styles.image}
          />
        </div>

        <div className={styles.card}>
          <span className={styles.number}>3</span>
          <p className={styles.stepText}>
            Check your Notification or Files Download section to find PLUSEADVI app
          </p>
          <img
            src="https://static-perf1.PLUSEADVI.com/blog-images/uploads/2024/11/real-money-game-download-step-3.webp"
            alt="Step 3"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Install;
