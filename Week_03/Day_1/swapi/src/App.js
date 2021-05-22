import React, { Component } from 'react';
import './App.css';
import RenderShips from './components/ships';
import RenderPilots from './components/pilots';
import RenderPilotsDetails from './components/pilots_details';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            movies: [],
            shipsUrl: null,
            pilotsUrl: null,
            pilotsDetails: null,
        };
        this.renderShips = this.renderShips.bind(this);
        this.triggerFetchShips = this.triggerFetchShips.bind(this);
        this.renderPilots = this.renderPilots.bind(this);
        this.triggerFetchPilots = this.triggerFetchPilots.bind(this);
        this.renderPilotsDetails = this.renderPilotsDetails.bind(this);
        this.triggerPilotsDetails = this.triggerPilotsDetails.bind(this);
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/films/')
            .then(res => res.json())

            .then(movies => {
                this.setState({ movies: movies.results });
            });
    }

    renderShips(event) {
        event.preventDefault();
        let urlString = event.target.attributes.url.textContent;
        let shipsUrlArray = urlString.split(',');

        this.setState({ shipsUrl: shipsUrlArray }, () => {
            this.triggerFetchShips();
        });
    }

    triggerFetchShips() {
        this.refs.ships.fetchShips();
    }

    renderPilots(pilotUrl) {
        pilotUrl.preventDefault();
        let urlString = pilotUrl.target.attributes.url.textContent;
        let pilotsUrlArray = urlString.split(',');

        this.setState({ pilotsUrl: pilotsUrlArray }, () => {
            this.triggerFetchPilots();
        });
    }

    triggerFetchPilots() {
        this.refs.pilots.fetchPilots();
    }

    renderPilotsDetails(pilotsDetails) {
        pilotsDetails.preventDefault();
        let name = pilotsDetails.target.attributes.name.textContent;
        let height = pilotsDetails.target.attributes.height.textContent;
        let gender = pilotsDetails.target.attributes.gender.textContent;
        let birthYear = pilotsDetails.target.attributes.birthYear.textContent;

        let pilotsDetailsArray = [];
        pilotsDetailsArray.push(name, height, gender, birthYear);
        this.setState({ pilotsDetails: pilotsDetailsArray }, () => {
            this.triggerPilotsDetails();
        });
    }

    triggerPilotsDetails() {
        this.refs.pilotsDetails.pilotsDetails();
    }

    render() {
        return (
            <>
                <header className="App-header">SWAPI</header>
                <ul>
                    {this.state.movies.map(element => (
                        <li url={element.starships} onClick={this.renderShips}>
                            {element.title}
                        </li>
                    ))}
                </ul>
                <RenderShips ref="ships" shipsUrl={this.state.shipsUrl} renderPilots={this.renderPilots} />
                <RenderPilots ref="pilots" pilotsUrl={this.state.pilotsUrl} renderPilotsDetails={this.renderPilotsDetails} />

                <RenderPilotsDetails ref="pilotsDetails" pilotsDetails={this.state.pilotsDetails} />
            </>
        );
    }
}

export default App;
