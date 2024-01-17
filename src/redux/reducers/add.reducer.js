const add = (state = {}, action) => {
    switch(action.type) {
      case 'SET_ADD':
        return action.payload;
      default:
        return state;
    }
  };
    export default add;