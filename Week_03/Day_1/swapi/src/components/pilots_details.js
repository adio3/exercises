import React, { Component } from 'react';

class RenderPilotsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pilotsDetails: [],
            isActive: true,
        };
    }

    pilotsDetails() {
        this.setState({ pilotsDetails: this.props.pilotsDetails });
        console.log(this.props.pilotsDetails);
    }

    render() {
        if (this.props.pilotsDetails !== null) {
            // this.fetchShips();
            // console.log(this.props.shipsUrl);
            return (
                <ul>

                        <li><span>Name:</span><span>{this.state.pilotsDetails[0]}</span></li>
                        <li><span>Height:</span><span>{this.state.pilotsDetails[1]}</span></li>
                        <li><span>Gender:</span><span>{this.state.pilotsDetails[2]}</span></li>
                        <li><span>Birthyear:</span><span>{this.state.pilotsDetails[3]}</span></li>

                </ul>
            );
        } else {
            return null;
        }
    }
}

export default RenderPilotsDetails;
