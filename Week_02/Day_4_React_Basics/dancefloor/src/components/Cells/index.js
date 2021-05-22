import React, { Component } from 'react'; // importing
import './style.css';

class Cells extends Component {
    constructor(props) {
        super(props);
        this.state = { State: true };
        this.makeInterval();
    }

    createCells = () => {
        const cells = [];

        for (let i = 0; i < 25; ++i) {
            cells.push(i);
        }
        return cells;
    };

    makeInterval() {
        setInterval(() => {
            this.setState({ State: !this.state.State });
        }, 1000);
    }

    newColor = () => {
        const colors = ['green', 'red', 'blue', 'yello', 'violet'];
        const randomNumber = Math.floor(Math.random() * 5);
        return colors[randomNumber];
    };

    render() {
        return (
            <div className="dance-floor">
                {this.createCells().map(cell => (
                    <div id="cell" className={this.newColor()}></div>
                ))}
            </div>
        );
    }
}

export default Cells;
