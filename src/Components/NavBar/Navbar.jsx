import React from "react";
import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <div className={styles.mainContainer}>
            <div>
                <a href="#resume">Resume</a>
            </div>
            <div>
                <a href="#work">Work</a>
            </div>
            <div>
                <a href="#contact">Contact</a>
            </div>
            <button className={styles.darkMode}>
                {/* <img src="" alt="" /> */}
            </button>
            <button className={styles.traslate}>
                EN
                {/* <img src="" alt="" /> */}
            </button>
        </div>
    )
}

export default NavBar;