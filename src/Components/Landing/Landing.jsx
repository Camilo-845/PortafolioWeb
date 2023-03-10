import React from "react";
import styles from "./Landing.module.css"
import downloadImage from "../../assets/download-svgrepo-com.png"
import CV from "../../assets/CV  EN.pdf"
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

function Landing(){
    const idiom = useSelector(state=>(state!=undefined)?state.idiom:"EN")

    const notify = () => toast('Download');
    return (
        <div className={`${styles.mainContainer} section`}>
            <div className={styles.dataContainer}>
                <h1>{(idiom=="EN")?"Hi!":"Hola!"}</h1><br /><br />
                <h1>{(idiom=="EN")?"My name is Camilo":"Mi nombre es Camilo"}<br/> Sarmiento</h1><br /><br />
                <h1>{(idiom=="EN")?"I'm a Full Stack Developer":"Soy desarrollador FullStack"}</h1><br /><br />
                <div className={styles.buttonsContainer}>
                    <a href={CV} target="_blank">
                        <button>{(idiom=="EN")?"View":"Ver"} CV</button>
                    </a>
                    <a href={CV} download="CV_Camilo_Sarmiento_FullStack" onClick={notify}>
                        <button>
                            <img className={styles.downloadImage} src={downloadImage} alt="" />
                            CV
                        </button>
                    </a>
                    <a href="#contact"><button>{(idiom=="EN")?"Contact":"Contacto"}</button></a>
                </div>
            </div>
        </div>
    )
}

export default Landing;