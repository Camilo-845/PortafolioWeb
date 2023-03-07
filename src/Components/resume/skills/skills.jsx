import React from "react";
import styles from "./Skills.module.css"
import {SKILLS_DATA} from "../../../utils/data"
import { useSelector } from "react-redux";

function skills(){
    const idiom = useSelector(state=>(state!=undefined)?state.idiom:"EN")

    return (
        <div className={styles.mainContainer}>
            <h1>{(idiom=="EN")?"SKILLS":"HABILIDADES"}</h1>
            <br />
            <br />
            <div className={styles.principalSkillsContainer}>
                {(SKILLS_DATA.principal)?SKILLS_DATA.principal.map(el => {
                    return (
                        <div className={styles.principalSkill} key={el.name}>
                            <img src={el.icon} alt={el.name}/>
                            <h2>{el.name}</h2>
                        </div>
                    )
                }):<></>}
            </div>
            <br />
            <br />
            <br />
            <div className={styles.secondarySkillsContainer}>

                {(SKILLS_DATA.secondary)?SKILLS_DATA.secondary.map(el => {
                    return (
                        <div className={styles.secondarySkill} key={el.name}>
                            <img src={el.icon} alt={el.name}/>
                            <h3>{el.name}</h3>
                        </div>
                    )
                }):<></>}
            </div>
        </div>
    )
}

export default skills;