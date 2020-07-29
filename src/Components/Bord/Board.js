import React from "react";
import s from "./Board.module.css";

const cell = ({value, onClick, cells}) => (
    <div className={s.cell} key={value} onClick={onClick}> {cells[value]} </div>
);

const Board = ({cells, handleClick}) => {
    const res = [];
    for (let i = 0; i < 9; i++) {
        res.push(cell({value: i, onClick: () => handleClick(i), cells}));
    }

    return (
        <div className={s.board}>
            {res}
        </div>
    );
};

export default Board;