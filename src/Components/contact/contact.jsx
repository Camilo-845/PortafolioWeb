import React from "react";
import styles from "./Contact.module.css"
import { useState } from "react";

function Contact() {
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
        console.log(state)
        e.preventDefault();
        setState({
            name: "",
            email: "",
            message: "",
        })
    }
    return (
        <div id="contact" className={styles.mainContainer}>
            <div className={styles.contactContainer}>
                <form onSubmit={e=>HandleSubmit(e)} className={styles.formContainer} action="">
                    <input name="name" onChange={e => HandleChange(e)} className={styles.TextInput} type="text" placeholder="Name..." value={state.name} />
                    <input name="email" onChange={e => HandleChange(e)} className={styles.TextInput} type="email" placeholder="Email..." value={state.email} />
                    <textarea name="message" onChange={e => HandleChange(e)} className={styles.messageInput} id="" cols="30" rows="10" placeholder="Message..." value={state.message}></textarea>
                    <input className={styles.submitButton} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact;