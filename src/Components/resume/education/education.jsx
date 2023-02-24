import React from "react";
import styles from "./Education.module.css"
import { EDUCATION_DATA } from "../../../utils/data";

function education(){
    return (
        <div className={styles.mainContainer}>
            <div className={styles.educationContainer}>
                {EDUCATION_DATA?.map(el=>{
                    return (
                        <div className={styles.education} key={el.name}>
                            <img src={el.image} alt={el.name} />
                            <div>
                                <h1>{el.name}</h1>
                                <h2>{el.description}</h2>
                                <h2>{el.time}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default education;