import React from "react";
import classes from "./Introduction.module.css"

const Introduction = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={classes.Introduction} id="IntroductionSection">
            <h1 className={classes.Title}>HUY VO</h1>
            <p className={classes.TagLine}>I'm a beginner developer and I'm interested in solving algorithms. Let's solve some algorithms on Leetcode</p>
        </div>
    )
})

export default Introduction