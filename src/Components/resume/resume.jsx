import React from "react";
import styles from "./resume.module.css"

import About from "./About/About";
import Education from "./Education/Education"
import Skills from "./Skills/Skills"

function Resume(){
    return (
        <div id="resume" className={styles.mainContainer}>
            <About></About>
            <Skills></Skills>
            <Education></Education>
        </div>
    )
}

export default Resume;