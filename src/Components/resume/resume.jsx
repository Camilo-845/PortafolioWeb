import React from "react";
import styles from "./resume.module.css"

import About from "./About/About";
import Education from "./Education/Education"
import Skills from "./Skills/Skills"
import ResumeNavbar from "./ResumeNavbar/ResumeNavbar";

function Resume() {
    return (
        /* <div id="resume" className={styles.mainContainer}> */
            /* <ResumeNavbar></ResumeNavbar> */
            <div className={styles.componentsContainer}>
                <About></About>
                <Skills></Skills>
                <Education></Education>
            </div>
        /* </div> */
    )
}

export default Resume;