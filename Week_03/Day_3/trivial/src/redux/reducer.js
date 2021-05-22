const initialState = [
    {
        questions: 'No Questions',
    },
];

const Reducer = (state = initialState, action) => {
    switch (action.action) {
        case 'load':
            return [{ questions: action.questions }];

        default:
            return state;
    }
};

export default Reducer;
