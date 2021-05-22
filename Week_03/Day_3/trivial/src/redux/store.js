import { createStore } from 'redux';

const initialState = [
    {
        questions: 'No Questions',
        answers: []
    },
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load':
            return { questions: action.questions };
        default:
            return state;
    }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
