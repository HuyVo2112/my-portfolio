import React from "react"
import classes from "./SideDrawer.module.css"
import Logo from "../../Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
import Backdrop from "../Backdrop/Backdrop";
import Auxilary from "../../../hoc/Auxilary/Auxilary";


const SideDrawer = (props) => {

    let sideDrawerClasses = [classes.SideDrawer];

    if (props.show) {
        sideDrawerClasses.push(classes.Open) 
    } else {
        sideDrawerClasses.push(classes.Close) 
    }

    return (
        <Auxilary>
            {props.show ? <Backdrop showMenuHandler={props.showMenuHandler} /> : null }    
            <div className={sideDrawerClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems></NavigationItems>
            </div>
        </Auxilary>
    );
}

export default SideDrawer;
