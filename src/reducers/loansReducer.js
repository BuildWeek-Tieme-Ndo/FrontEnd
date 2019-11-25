import * as c from '../actions';

const loansReducer = (state=[], action) => {
  switch(action.type) {
    case c.GET_LOAN_LIST:
      // Completely replace loans list
      return action.payload;
    case c.ADD_LOAN:  // push
      return state;
    case c.MODIFY_LOAN:
      return state;   // find/delete
    default:
      // Don't change loans list
      return state;
  }
}

export default loansReducer;