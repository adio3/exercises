import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pending extends Component {
    constructor(props) {
        super(props);
        this.moveTodo = this.moveTodo.bind(this);
    }

    moveTodo(event) {
        const id = parseInt(event.target.id);
        const action = {
            type: 'move',
            content: id,
        };
        this.props.dispatch(action);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    if (todo.completed === false) {
                        return (
                            <li key={todo.id}>
                                {todo.content}
                                <button className="move" id={todo.id} onClick={this.moveTodo}>
                                    >
                                </button>
                            </li>
                        );
                    } else return null;
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return { todos: state };
};

export default connect(mapStateToProps)(Pending);
