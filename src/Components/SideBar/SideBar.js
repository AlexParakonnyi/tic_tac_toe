import React from "react";
import s from "./SideBar.module.css"

const History = ({ steps, click }) => (
    <div className={s.history}>
        {steps.map((el, ind) => (
            <div key={ind} className={s.item} onClick={() => click(ind)}>
                {ind ? `${ind + 1}.  Go to step # ${ind}` : "1.  Go to start game"}
            </div>
        ))}
    </div>
);

const SideBar = ({status, steps, click}) => (
    <div className={s.wrapper}>
        <div className={s.status}>{status}</div>
        <History steps={steps} click={click}/>
    </div>
);

export default SideBar;