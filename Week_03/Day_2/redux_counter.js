const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const list = document.getElementById('list');
const addTodo = document.getElementById('add-todo');
const todoInput = document.getElementById('new-todo');

const reducer = function (state, action) {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }
    if (action.type === 'addTodo') {
        return {
            counter: state.counter,
            todos: [action.content],
        };
    }
    return { counter: 0, todos: ['Learn Redux', 'Master React'] };
};

const store = Redux.createStore(reducer);

function render() {
    const state = store.getState();
    counter.innerText = state.counter;
    for (todos of state.todos) {
        newLi = document.createElement('li');
        newLi.innerText = todos;
        list.appendChild(newLi);
    }
}

increment.addEventListener('click', function () {
    const action = {
        type: 'increment',
    };
    store.dispatch(action);
    render();
});
decrement.addEventListener('click', function () {
    const action = {
        type: 'decrement',
    };
    store.dispatch(action);
    render();
});

addTodo.addEventListener('click', function () {
    const action = {
        type: 'addTodo',
        content: todoInput.value,
    };
    store.dispatch(action);
    render();
});

render();
