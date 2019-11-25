import * as c from '../actions';

const paymentsReducer = (state=[], action) => {
  switch(action.type) {
    case c.GET_PAYMENT_LIST:
      // Completely replace payment list
      return action.payload;
    case c.ADD_PAMENT:
      return state; // Push
    case c.MODIFY_PAYMENT:
      return state; // Find, remove
    default:
      // Don't change payment list
      return state;
  }
}

export default paymentsReducer;