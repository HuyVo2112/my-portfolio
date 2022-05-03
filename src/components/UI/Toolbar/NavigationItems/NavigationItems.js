import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem>Introduction</NavigationItem>
            <NavigationItem>About Me</NavigationItem>
            <NavigationItem>Projects</NavigationItem>
            <NavigationItem>Skills</NavigationItem>
            <NavigationItem>Contacts</NavigationItem>
        </ul>
    )
}

export default NavigationItems;