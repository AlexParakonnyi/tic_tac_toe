import React from 'react';
import s from "./App.module.css"
import Board from "./Components/Bord/Board";
import SideBar from "./Components/SideBar/SideBar";

class App extends React.Component {

    state = {
        cells: Array(9).fill(null),
        isXNext: true,
    };

    handleClick = (i) => {
        const cellsClone = this.state.cells.slice();

        cellsClone[i] = this.state.isXNext ? "X" : "O";
        if (this.returnWinner(this.state.cells)) return;

        this.setState({
            cells: cellsClone,
            isXNext: !this.state.isXNext,
        })
    };

    getStatus = () => {
        const winner = this.returnWinner(this.state.cells);
        if (winner) {
            return `${winner} is winner`;
        } else {
            return `${this.state.isXNext ? "X" : "O"} is next`;
        }
    };


    render() {
        return (
            <div className={s.wrapper}>
                <Board cells={this.state.cells} handleClick={this.handleClick}/>
                <div className={s.sideBar}>
                    <SideBar status={this.getStatus()}/>
                </div>
            </div>
        );
    }

    returnWinner = (arr) => {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i of win) {
            const [a, b, c] = i;
            if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
                return arr[a];
            }
        }
    }
}

export default App;
