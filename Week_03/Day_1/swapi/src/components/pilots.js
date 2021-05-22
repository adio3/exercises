import React, { Component } from 'react';

class RenderPilots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pilots: [],
            isActive: true,
        };
    }

    fetchPilots() {
        if (this.props.pilotsUrl[0] !== '') {
            this.setState({ pilots: [] });
            this.props.pilotsUrl.map(url => {
                fetch(url)
                    .then(res => res.json())

                    .then(pilots => {
                        this.state.pilots.push(pilots);
                        this.setState({});
                    });
            });
        } else this.setState({});
    }

    render() {
        if (this.props.pilotsUrl !== null) {
            // this.fetchShips();
            // console.log(this.props.shipsUrl);
            return (
                <ul>
                    {this.state.pilots.map(element => (
                        <li name={element.name} height={element.height} gender={element.gender} birthYear={element.birth_year} onClick={this.props.renderPilotsDetails}>{element.name}</li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }
}

export default RenderPilots;
