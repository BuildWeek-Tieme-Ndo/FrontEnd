// import all reducer files here
import { combineReducers } from 'redux';
import signedInReducer from './isSignedIn';
import clientsReducer from './clientsReducer.js';
import loansReducer from './loansReducer';
// import paymentsReducer from './paymentsReducer';

const allReducers = combineReducers({
  signedIn: signedInReducer,
  clients: clientsReducer,
  loans: loansReducer,
//  payments: paymentsReducer
});

export default allReducers;