import React from "react";
import styles from "./Landing.module.css"
import downloadImage from "../../assets/download-svgrepo-com.png"
import CV from "../../assets/CV  EN.pdf"
import toast, { Toaster } from 'react-hot-toast';


function Landing(){
    const notify = () => toast('Download');
    return (
        <div id="resume" className={styles.mainContainer}>
            <div className={styles.dataContainer}>
                <h1>Hi!</h1><br /><br />
                <h1>My name is Camilo <br/> Sarmiento</h1><br /><br />
                <h1>I'm a Full Stack Developer</h1><br /><br />
                <div className={styles.buttonsContainer}>
                    <a href={CV} target="_blank">
                        <button>View CV</button>
                    </a>
                    <a href={CV} download="CV_Camilo_Sarmiento_FullStack" onClick={notify}>
                        <button>
                            <img className={styles.downloadImage} src={downloadImage} alt="" />
                            CV
                        </button>
                    </a>
                    <a href="#contact"><button>Contact</button></a>
                </div>
            </div>
        </div>
    )
}

export default Landing;