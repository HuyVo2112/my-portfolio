import React, { Component } from "react";
import classes from "./AboutMe.module.css"
import myPhoto from "../../assets/myPhoto.jpg";
import Fade from "react-reveal/Fade";
import Auxilary from "../../hoc/Auxilary/Auxilary"

const AboutMe = React.forwardRef((props, ref) => (
    <div ref={ref} className={classes.AboutMe} id="AboutMeSection">
                <Fade left>
                    <h1>About Me</h1>
                </Fade>
                <Fade bottom>
                    <div className={classes.ImageWrapper}>
                        <img src={myPhoto}></img>
                        
                    </div>
                    <h2>Huy Vo</h2>
                    <p className={classes.Content}>    
                        Hi there, I'm a <strong>first-year Computer Science student</strong> at Algonquin College and I've been inspired to code by so many people. 
                        The reason for the birth of this website is that I've got an assignment to create a digital portfolio in one of my classes. 
                        It was actually an optional assignment but after seeing so many beautiful portfolios of other developers, I've decided to make my own one.
                        And <strong>here it is!</strong>
                    </p> 
                    <p className={classes.Exclaimation}>
                        Please note that this website is very simple. I haven't done many cool projects yet and my coding skills are still very limited.
                        However, I'm planning on improving my current skills as well as adapting new skills in my college. Once I've learned new skills and done 
                        more projects, I'll comeback and update this portfolio website. <br></br>
                        
                    </p>   
                </Fade>
                
            </div>
    )
) 



export default AboutMe;