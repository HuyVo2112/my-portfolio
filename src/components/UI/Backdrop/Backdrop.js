import React from "react";
import classes from "./Backdrop.module.css"

const Backdrop = (props) => {
    return (
        <div onClick={props.showMenuHandler} className={classes.Backdrop}>

        </div>
    )
}

export default Backdrop;