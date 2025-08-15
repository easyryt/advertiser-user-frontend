import React from "react";
import styles from "./ProudMember.module.css";

const ProudMember = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>PLUSEADVI is a Proud Member Of</h2>
      <div className={styles.logos}>
        <img
          src="https://static-perf1.zupee.com/wp-content/uploads/2022/06/AIGF-1.webp"
          alt="AIGF"
        />
        <img
          src="https://static-perf1.zupee.com/wp-content/uploads/2022/06/FICCI-1.webp"
          alt="FICCI"
        />
        <img
          src="https://static-perf1.zupee.com/wp-content/uploads/2022/06/IAMAI-1.webp"
          alt="IAMAI"
        />
      </div>
    </div>
  );
};

export default ProudMember;
