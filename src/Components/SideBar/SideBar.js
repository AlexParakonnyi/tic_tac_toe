import React from "react";
import s from "./SideBar.module.css"

const SideBar = ({status}) => (
    <div className={s.wrapper}>
        <div className={s.status}>{status}</div>
    </div>
);

export default SideBar;