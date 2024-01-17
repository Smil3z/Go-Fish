import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import journal from './journal.reducer';
import details from './details.reducer';
import edit from './edit.reducer';
import add from './add.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  journal, // will display user data of the fish
  details, // will display new added details
  edit, // will be able to edit the data of the fish
  add, // will add a new fish
});

export default rootReducer;
