import React, { Component } from 'react';
import { connect } from 'react-redux';

class Completed extends Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(event) {
        const id = parseInt(event.target.id);
        const action = {
            type: 'delete',
            content: id,
        };
        this.props.dispatch(action);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    if (todo.completed === true) {
                        return (
                            <li key={todo.id}>
                                {todo.content}
                                <button className="delete" id={todo.id} onClick={this.deleteTodo}>
                                    x
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

export default connect(mapStateToProps)(Completed);
