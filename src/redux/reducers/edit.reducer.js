const edit = (state = [], action) => {
    switch(action.type) {
      case 'SET_EDIT':
        return action.payload;
      default:
        return state;
    }
  };
    export default edit;