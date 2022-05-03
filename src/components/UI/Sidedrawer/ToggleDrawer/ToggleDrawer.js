import classes from "./ToggleDrawer.module.css";
import React from "react";

const ToggleDrawer = (props) => {
    return (
        <div onClick={props.showMenuHandler} className={classes.ToggleDrawer}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default ToggleDrawer;