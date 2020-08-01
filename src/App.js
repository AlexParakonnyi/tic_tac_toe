import React from 'react';
import s from "./App.module.css"
import Board from "./Components/Bord/Board";
import SideBar from "./Components/SideBar/SideBar";
import Value from "./Components/Value/Value";

class App extends React.Component {

    state = {
        history: [
            Array(9).fill(null),
        ],
        isXNext: true,
        currentBoard: 0,
    };

    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.currentBoard + 1);
        const current = history[history.length - 1];
        const cells = current.slice();

        if (cells[i]) return;
        if (this.returnWinner(cells)) return;

        cells[i] = this.state.isXNext ? "X" : "O";
        history.push(cells);

        this.setState({
            history: history,
            isXNext: !this.state.isXNext,
            currentBoard: history.length - 1,
        })
    };

    getStatus = () => {
        const current = this.state.history[this.state.currentBoard];
        const winner = this.returnWinner(current);
        if (winner) {
            return (
                <div className={s.value}>
                    <Value value={winner}/>
                    <span className={s.margin}/>
                    is winner
                </div>
            )
        } else {
            return (
                    <div className={s.value}>
                        <Value value={this.state.isXNext ? 'X' : 'O'}/>
                        <span className={s.margin}/>
                        is next
                    </div>
            )
        }
    };

    clickMoveTo = (i) => {
        this.setState({
            currentBoard: i,
            isXNext: i % 2 === 0,
        })
    };

    render() {
        const currentCells = this.state.history[this.state.currentBoard];
        return (
            <div className={s.wrapper}>
                <Board cells={currentCells} handleClick={this.handleClick}/>
                <div className={s.sideBar}>
                    <SideBar status={this.getStatus()} steps={this.state.history} click={this.clickMoveTo}/>
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
