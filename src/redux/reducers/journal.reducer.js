const journal = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOURNAL':
            return action.payload;
        default:
            return state;
    }
}

export default journal;