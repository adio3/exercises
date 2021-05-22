import React, { Component } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import './App.css';
import Completed from './components/completed';
import Pending from './components/pending';

class App extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            newTodo: '',
        };
    }

    addTodo() {
        // const isVisible = () =>{if()}
        const action = {
            type: 'add',
            content: { id: this.props.todos.length + 1, content: this.state.newTodo, completed: false, visible: true },
        };
        this.props.dispatch(action);
        document.getElementById('input-field').value = '';
        this.setState({ newTodo: '' });
    }

    onChangeHandler(event) {
        this.setState({ newTodo: event.target.value });
    }

    check(event) {
      const action = {
        type: 
      }
      this.props.dispatch(action);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">ToDo</header>
                <input id="input-field" type="text" onChange={this.onChangeHandler} />
                <button className="add" onClick={this.addTodo}>
                    Add ToDo
                </button>
                <div className="filter-div">
                    <input type="radio" name="filter" id="all" onChange={this.check} />
                    <label htmlFor="all">All</label>
                    <input type="radio" name="filter" id="pending" />
                    <label htmlFor="pending">Pending</label>
                    <input type="radio" name="filter" id="completed" />
                    <label htmlFor="completed">Completed</label>
                </div>
                <div>
                    <p>Pending</p>
                    <Pending />
                </div>
                <div>
                    <p>Completed</p>
                    <Completed />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { todos: state };
};

export default connect(mapStateToProps)(App);
