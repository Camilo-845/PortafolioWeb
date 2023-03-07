import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import styles from "./Contact.module.css"
import { useState } from "react";
import GitHubImage from "../../assets/github.png";
import LinkedInImage from "../../assets/linkedin.png"
import { useSelector, useDispatch } from "react-redux";
import { postMail } from "../../redux/actions";

function Contact() {
    const idiom = useSelector(state=>(state!=undefined)?state.idiom:"EN")

    const dispatch = useDispatch()

    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    })
    const HandleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(state).some((el)=>el.length===0)){
            toast.error((idiom=="EN")?"Missing fields to fill":"fatan campos por llenar");
        }else{
            dispatch(postMail(state))
            setState({
                name: "",
                email: "",
                message: "",
            })
            toast.success((idiom=="EN")?"Sent successfully.":"Enviado correctamente")
        }
    }
    return (
        <div id="contact" className={styles.mainContainer}>
            <Toaster position="bottom-left"/>
            <div className={styles.imageFormContainer}>
            <img className={styles.planeImage} src="https://www.svgrepo.com/show/208137/paper-plane.svg" alt="" />
                <div className={styles.contactContainer}>
                    <h1>{(idiom=="EN")?"Contact":"Contacto"}</h1>
                    <form onSubmit={e => HandleSubmit(e)} className={styles.formContainer} action="">
                        <input name="name" onChange={e => HandleChange(e)} className={styles.TextInput} type="text" placeholder={(idiom=="EN")?"Name...":"Nombre..."} value={state.name} />
                        <input name="email" onChange={e => HandleChange(e)} className={styles.TextInput} type="email" placeholder="Email..." value={state.email} />
                        <textarea name="message" onChange={e => HandleChange(e)} className={styles.messageInput} id="" cols="30" rows="10" placeholder={(idiom=="EN")?"Message...":"Mensaje..."} value={state.message}></textarea>
                        <input className={styles.submitButton} type="submit" value={(idiom=="EN")?"Submit":"Enviar"}/>
                    </form>
                    <div className={styles.snContainer}>
                        <a href="https://github.com/Camilo-845" target="_blank">
                            <img src={GitHubImage} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/camilo-sarmiento-051a80244" target="_blank">
                            <img src={LinkedInImage} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;