import React from "react";
import styles from "./About.module.css"
import aboutImage from "/about/AboutImage.jpeg"
import cursorIcon from "/about/cursorIcon.png"
import serverIcon from "/about/serverIcon.png"
import uiIcon from "/about/uiIcon.png"


export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={aboutImage}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={cursorIcon} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={serverIcon} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Query Optimizer</h3>
              <p>
              I have experience in enhancing database
              performance by optimizing SQL queries for faster and more efficient data retrieval.
              </p>
            </div>
          </li>
          </ul>
        </div>
      </section>
    );
  };