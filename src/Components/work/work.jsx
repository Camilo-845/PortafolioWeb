import React from "react";
import styles from "./Work.module.css";
import { WORK_DATA } from "../../utils/data";

function Work(){
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
                                <h2>{el.name}</h2>
                                <div dangerouslySetInnerHTML={{ __html: el.description }} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.secondaryWorks}>
                <h2>Other proyects</h2>
            </div>
        </div>
    )
}
export default Work;