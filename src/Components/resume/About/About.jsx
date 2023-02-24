import React from "react";
import styles from "./About.module.css"
import {PROFILE_DATA} from "../../../utils/data"
import ProfileImage from "../../../assets/profile-pic(2).png"

function about() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.dataContainer}>
                <h2>
                    {PROFILE_DATA.about_me_1}
                </h2>
                <br />
                <h3>
                    {PROFILE_DATA.about_me_2}
                </h3>
                <br />
                <h3>
                    {PROFILE_DATA.about_me_3}
                </h3>
            <div className={styles.imageContiner}>
                <img src={ProfileImage} alt="" />
            </div>
            </div>
        </div>
    )
}

export default about;