import React from "react";
import styles from "./Landing.module.css"
import downloadImage from "../../assets/download-svgrepo-com.png"

function Landing(){
    return (
        <div className={styles.mainContainer}>
            <div className={styles.dataContainer}>
                <h1>Hello!</h1><br /><br />
                <h1>My name is Camilo <br/> Sarmiento</h1><br /><br />
                <h1>I'm a Full Stack Developer</h1><br /><br />
                <div className={styles.buttonsContainer}>
                    <button>View CV</button>
                    <button>
                        <img className={styles.downloadImage} src={downloadImage} alt="" />
                        CV
                    </button>
                    <a href="#contact"><button>Contact</button></a>
                </div>
            </div>
        </div>
    )
}

export default Landing;