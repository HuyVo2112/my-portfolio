import React from "react";
import classes from "./NavigationItem.module.css"
import AuthContext from "../../../../../context/auth-context"


const NavigationItem = (props) =>  {
    return (
        <li className={classes.NavigationItem}>
            <AuthContext.Consumer>
                {(context) => 
                    <a 
                        href={["#", props.children.replace(" ", ""), "Section"].join("")}
                        className={props.children === context.activePage ? classes.active : null}>
                            {props.children}
                    </a>}
            </AuthContext.Consumer>
             
        </li>
    )
}

export default NavigationItem;