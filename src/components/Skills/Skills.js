import React from "react";
import classes from "./Skills.module.css";
import cssLogo from "../../assets/Skills/CSS.svg";
import htmlLogo from "../../assets/Skills/HTML5_Logo_512.png";
import jsLogo from "../../assets/Skills/JavaScript-Logo.png";
import reactLogo from "../../assets/Skills/react.png";
import javaLogo from "../../assets/Skills/Java-Logo.png";
import postgreLogo from "../../assets/Skills/postgre.svg"
import Fade from "react-reveal";

const Skills = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={classes.Skills} id="SkillsSection">
            <Fade bottom>
                <h1>My Skills</h1>
            </Fade>
            
            <Fade left cascade>
                <ul>
                    <img id={classes.html} src={htmlLogo}></img>
                    <img src={cssLogo}></img>
                    <img src={jsLogo}></img>
                    <img id={classes.react} src={reactLogo}></img>
                    <img id={classes.java} src={javaLogo}></img>
                    <img src={postgreLogo}></img>

                </ul>
            </Fade>
            
            
        </div>
    )
})

export default Skills;