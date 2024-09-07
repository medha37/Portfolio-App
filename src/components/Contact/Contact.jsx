import React from "react";

import styles from "./Contact.module.css";
import email from "/contact/emailIcon.png"
import linkedin from "/contact/linkedinIcon.png"
import github from "/contact/githubIcon.png"

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={email} alt="Email icon" />
                    <a href="mailto:shreyashimedha@gmail.com">shreyashimedha@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={linkedin}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/medha-shreyashi/">linkedin.com/medha-shreyashi</a>
                </li>
                <li className={styles.link}>
                    <img src={github} alt="Github icon" />
                    <a href="https://github.com/medha37">github.com/medha-shreyashi</a>
                </li>
            </ul>
        </footer>
    );
};



