import React, { Component } from 'react';

class RenderShips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: [],
            isActive: true,
        };
    }

    fetchShips() {
        this.setState({ ships: [] });
        this.props.shipsUrl.map(url => {
            fetch(url)
                .then(res => res.json())

                .then(ships => {
                    this.state.ships.push(ships);
                    this.setState({});
                });
        });
    }

    render() {
        if (this.props.shipsUrl !== null) {
            // this.fetchShips();
            // console.log(this.props.shipsUrl);
            return (
                <ul>
                    {this.state.ships.map(element => (
                        <li url={element.pilots} onClick={this.props.renderPilots}>
                            {element.name}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }
}

export default RenderShips;
