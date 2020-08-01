import React from "react";
import s from "./Value.module.css";

const Value = ({value}) => {
    const classes = value === "X" ? s.cross : s.zero;
    return (
        <div className={classes}>
            {value}
        </div>
    )
};

export default Value;