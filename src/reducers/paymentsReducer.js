export const PAYMENTS_NEW_LIST = 'PAYMENTS_NEW_LIST';
export const PAYMENT_ADD = 'PAYMENT_ADD';
export const PAYMENT_MODIFY = 'PAYMENT_MODIFY';
export const PAYMENT_DELETE = 'PAYMENT_DELETE';

const signedInReducer = (state=[], action) => {
  switch(action.type) {
    case PAYMENTS_NEW_LIST:
      // Completely replace payment list
      return action.payload;
    default:
      // Don't change payment list
      return state;
  }
}

export default signedInReducer;