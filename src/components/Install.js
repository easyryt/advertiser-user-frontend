import styles from "./Install.module.css";

const Install = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>HOW TO INSTALL PLUSEADVI APP</h2>
      <p className={styles.text}>
        Steps to install the PLUSEADVI and start winning{" "}
      </p>

      {/* YouTube Video Container */}
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video ID
          title="PLUSEADVI Installation Guide"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Install;
