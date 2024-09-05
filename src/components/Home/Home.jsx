import React from "react";
import styles from "./Home.module.css";
// import heroImg from "../../assets/home/laptopImg.jpg";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Medha</h1>
        <p className={styles.description}> A full-stack developer with 2 years of 
        <br/>experience in Java, JavaScript, SQL Server.
        <br/> Reach out if you'd like to learn more!</p>
        <div className={styles.buttons}>
          <a href="/MedhaResume.pdf" className={styles.downloadBtn} download="MedhaResume.pdf">
            Download CV
          </a>
          {/* <div className={styles.socialLinks}>
            <a href="https://github.com/medha37" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/medha-shreyashi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/medhashreyashi/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div> */}
        </div>
      </div>
      {/* <div className={styles.heroImg}></div> */}
      {/* <img src={heroImg} alt="Hero image" className={styles.heroImg} /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};