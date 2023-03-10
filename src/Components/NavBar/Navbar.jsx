import React , { useEffect, useState} from "react";
import styles from "./NavBar.module.css"
import { setIdiom } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
    const dispatch = useDispatch();
    const [state,setState]=useState({
        activeLink:null,
    })

    useEffect(() => {
        dispatch(setIdiom("EN"))
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            /* console.log(sections) */
            const currentPos = window.pageYOffset;
      
            sections.forEach((section, index) => {
              const top = section.offsetTop - 50;
              const bottom = top + section.offsetHeight;
      
              if (currentPos >= top && currentPos < bottom) {
                setState({
                    activeLink:index,
                })
                /* setActiveLink(index); */
              }
            });
      
            // Cuando el usuario se desplaza hasta el fondo de la página
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
                setState({
                    activeLink:sections.length - 1,
                })
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch])

    const  idiom = useSelector(state=>(state!=undefined)?state.idiom:"EN")
    const HandleSetIdiom = ()=>{
        let new_idiom = (idiom=="EN")?"ES":"EN"
        dispatch(setIdiom(new_idiom))
    }
    
    const handleLinkClick = (index) => {
        setState({
            activeLink:index,
        })
      };
    

    return (
        <div className={styles.mainContainer}>
            <div>
                <a href="#resume" className={(state.activeLink===1)?styles.activeLink:styles.link}>{(idiom=="EN")?"Resume":"Sobre mi"}</a>
            </div>
            <div>
                <a href="#work" className={(state.activeLink===2)?styles.activeLink:styles.link}>{(idiom=="EN")?"Work":"Proyectos"}</a>
            </div>
            <div>
                <a href="#contact" className={(state.activeLink===3)?styles.activeLink:styles.link}>{(idiom=="EN")?"Contact":"Contacto"}</a>
            </div>
            {/* <button className={styles.darkMode}>
                {/* <img src="" alt="" />
            </button> */}
            <button className={styles.traslate} onClick={HandleSetIdiom}>
                {idiom}
                {/* <img src="" alt="" /> */}
            </button>
        </div>
    )
}

export default NavBar;