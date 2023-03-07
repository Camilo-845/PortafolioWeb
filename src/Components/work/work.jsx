import React from "react";
import styles from "./Work.module.css";
import { WORK_DATA } from "../../utils/data";
import { useSelector } from "react-redux";

function Work(){
    const idiom = useSelector(state=>(state!=undefined)?state.idiom:"EN")
    
    return (
        <div id="work" className={styles.mainContainer}>
            <div className={styles.principalWorks}>
                {WORK_DATA.principal.map(el=>{
                    return (
                        <div className={styles.principalWork} key={el.name}>
                            <img src={el.image} alt={el.name} />
                            <div className={styles.principaLinks}>
                                {el.deploy?
                                    <a href={el.deploy.link} target="_blank">
                                        <img src={el.deploy.icon} alt="deploy" />
                                    </a>
                                :false}
                                {el.repository?
                                    <a href={el.repository.link} target="_blank">
                                        <img src={el.repository.icon} alt="repository" />
                                    </a>
                                :false}
                            </div>
                            <div className={styles.principalInfo}>
                                <div>
                                    <h2>{el.name}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: el.description[idiom] }} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.secondaryWorks}>
                <h2>{(idiom=="EN")?"Other proyects":"Otros proyectos"}</h2>
                {WORK_DATA.secondary.map(el=>{
                    return(
                    <div className={styles.secondaryWork} key={el.name}>
                        <h3>{el.name}</h3>
                        <div className={styles.secondaryLinks}>
                            {el.deploy? <a href={el.deploy.link} target="_blank">
                                <img src={el.deploy.icon} alt="" />
                            </a>:false}
                            {el.repository? <a href={el.repository.link} target="_blank">
                                <img src={el.repository.icon} alt="" />
                            </a>:false}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Work;