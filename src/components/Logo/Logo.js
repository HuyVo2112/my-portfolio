import classes from "./Logo.module.css";
import React from "react"
import mainLogo from "../../assets/mainLogo.png";

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={mainLogo}></img>
    </div>
)

export default Logo;
