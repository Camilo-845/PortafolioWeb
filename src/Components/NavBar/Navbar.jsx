import React from "react";
import styles from "./NavBar.module.css"
import { setIdiom } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function NavBar() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setIdiom("EN"))
    }, [dispatch])

    const  idiom = useSelector(state=>(state!=undefined)?state.idiom:"EN")
    const HandleSetIdiom = ()=>{
        let new_idiom = (idiom=="EN")?"ES":"EN"
        dispatch(setIdiom(new_idiom))
    }
    


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
            <button className={styles.traslate} onClick={HandleSetIdiom}>
                {idiom}
                {/* <img src="" alt="" /> */}
            </button>
        </div>
    )
}

export default NavBar;