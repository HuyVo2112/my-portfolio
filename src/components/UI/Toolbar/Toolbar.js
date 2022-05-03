import React from "react"
import Logo from "../../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import ToggleDrawer from "../Sidedrawer/ToggleDrawer/ToggleDrawer";

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar} style={{
            backgroundColor: (props.transparent ? "transparent" : "var(--dark-green)"),
            fontWeight: 200
        }}>
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>

            <ToggleDrawer showMenuHandler={props.showMenuHandler}/>
        </header>
    )
}

export default Toolbar;