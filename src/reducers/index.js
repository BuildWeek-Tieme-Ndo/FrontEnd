// import all reducer files here
import signedInReducer from './isSignedIn';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  signedIn: signedInReducer,
});

export default allReducers;