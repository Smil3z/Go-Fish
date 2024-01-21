const details = (state = {}, action) => {
  switch(action.type) {
    case 'SET_DETAILS':
      return action.payload;
    case 'DELETE_DETAILS':
      return {};
    default:
      return state;
  }
};
  export default details;