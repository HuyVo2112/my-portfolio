import React from "react";
import classes from "./Projects.module.css";
import Project from "./Project/Project";
import Fade from "react-reveal/Fade";
import mainBackground2 from "../../assets/mainBackground2.jpg";
import burgerBuilder from "../../assets/burgerBuilder.JPG";
const Projects = React.forwardRef((props, ref) => (
        <div ref={ref} className={classes.Projects} id="ProjectsSection">

            
            <Fade right><h1>Projects</h1></Fade>
            <Fade><p>These are the projects that I've been working on</p></Fade>
            
            <ul >
            
                <Project 
                header="My Portfolio Website"
                content={[
                    "Combining HTML, CSS and JavaScript to create a good-looking website with clear and informative sections.",
                    "Using React framework to develop organized, maintainable and scalable code.",
                    "Using React-Reveal library to add animations to the website, thus increasing user experience of the website.",
                    "Hosting this site using Github hosting."
                ]}
                image={mainBackground2} 
                 />
                <Project
                header="Burger Builder(Coming soon...)"
                image={burgerBuilder} 
                />
                <Project
                header="Calculator(Coming soon...)"
    
                 />
                <Project
                header="To-do list(Coming soon...)"
    
                 />
            </ul>      
        </div>
))

export default Projects;