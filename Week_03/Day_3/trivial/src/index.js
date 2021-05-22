import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Questions from './components/questions';
import Summary from './components/summary';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <header className="App-header">
                    <h2>Trivial</h2>
                </header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/questions/:id" component={Questions} />
                    <Route exact path="/summary" component={Summary} />
                </Switch>
            </Router>
        </React.StrictMode>
    </Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
