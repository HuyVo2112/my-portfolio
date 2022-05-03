import React from "react";
import classes from "./Contacts.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal";

const Contacts = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={classes.Contacts} id="ContactsSection">
            <Fade bottom>
                <h1>Let's work together</h1>
            </Fade>
            <Fade left cascade>
                <ul className={classes.Icons}>
                    <div className={classes.Contact}>
                        <a href="https://github.com/HuyVo2112">
                            <FontAwesomeIcon className={classes.fontAwesomeIcon}  icon={faGithub} />
                            <p>/HuyVo2112</p>
                        </a> 
                    </div>
                    <div className={classes.Contact}>
                        <a href="https://www.facebook.com/HuyVo2112/">
                            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faFacebook} />
                            <p>/HuyVo2112</p>
                        </a>
                        
                    </div>
                    <div className={classes.Contact}>
                        <a href="https://www.linkedin.com/in/huyvo2112/">
                            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faLinkedin} />
                            <p>/HuyVo2112</p>
                        </a>
                        
                    </div>
                    <div className={classes.Contact}>
                        <a href="tel:613-550-3435">
                            <FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faPhoneAlt} />
                            <p> (613) 550-34-35</p>
                        </a>      
                    </div> 
                </ul>
                
            </Fade>
        
        
        </div>
        
    )
})

export default Contacts;