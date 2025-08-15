import React, { useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: "Is Plusadvi free to download?",
    answer:
      "Yes, downloading the Plusadvi app is completely free. You can install it directly from our website by following the steps above."
  },
  {
    question: "Is the Plusadvi app safe to install?",
    answer:
      "Absolutely. Our app is 100% safe and verified. You might get a warning while downloading, but this is standard for APK files outside the Play Store."
  },
  {
    question: "How can I start earning on Plusadvi?",
    answer:
      "After installing, sign up for an account, choose your favorite games like Ludo or Trump Cards, and start playing to win real rewards."
  },
  {
    question: "What devices are supported?",
    answer:
      "Plusadvi works on most Android smartphones with version 5.0 (Lollipop) or above."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className={`${styles.icon} ${activeIndex === index ? styles.open : ""}`}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;