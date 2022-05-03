import React from "react";
import classes from "./Project.module.css"

import Fade from "react-reveal/Fade"

const Project = (props) => {
    return (
        <Fade bottom >
            <div className={classes.Project}>
                
                    <h2>{props.header}</h2>
                    <ul>
                        {props.content === undefined ? null : props.content.map(el => (
                            <li>{el}</li>
                        ))}
                    </ul>
                    
                    <img src={props.image} alt={props.header.concat(" image")}></img>
                
                
            </div>
        </Fade>
    )
}

export default Project;