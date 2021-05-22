import { createStore } from 'redux';

const initialState = [
    { id: 1, content: 'Learn JS', completed: true, visible: true },
    { id: 2, content: 'Learn React', completed: false, visible: true },
];

const initialFilter = [
    {
        filter: 'all',
    },
];

const deleteTodo = (todoArray, id) => {
    const newTodos = [];
    for (const todo of todoArray) {
        if (todo.id !== id) {
            newTodos.push(todo);
        }
    }
    return newTodos;
};

const moveTodo = (todoArray, id) => {
    const newTodos = [];
    for (const todo of todoArray) {
        if (todo.id !== id) {
            newTodos.push(todo);
        } else {
            todo.completed = true;
            newTodos.push(todo);
        }
    }
    return newTodos;
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.content];

        case 'move':
            return moveTodo(state, action.content);

        case 'delete':
            return deleteTodo(state, action.content);

        default:
            return state;
    }
};

// const initialFilter = [
//     const filterReducer = (state = initialFilter, action) => {

//     };

const combineReducers = { todosReducer };

const store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
