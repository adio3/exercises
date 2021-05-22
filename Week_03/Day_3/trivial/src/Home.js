import { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { Link } from 'react-router-dom';
// import { fetching } from './components/fetch';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetching(5);
    }
    fetching(amount) {
        console.log('in da fetch');
        const url = 'https://opentdb.com/api.php?amount=' + amount;
        fetch(url)
            .then(res => res.json())

            .then(questions => {
                const action = { type: 'load', questions: questions.results };
                this.props.dispatch(action);
            });
    }

    render() {
        return (
            <div className="Home">
                <h2>Homepath</h2>

                <button>
                    <Link to="/questions/0">Start</Link>
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { questions: state };
};

export default connect(mapStateToProps)(Home);
