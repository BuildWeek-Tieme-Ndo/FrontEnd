export const LOANS_NEW_LIST = 'LOANS_NEW_LIST';
export const LOAN_ADD = 'LOAN_ADD';
export const LOAN_MODIFY = 'LOAN_MODIFY';
export const LOAN_DELETE = 'LOAN_DELETE';

const signedInReducer = (state=[], action) => {
  switch(action.type) {
    case LOANS_NEW_LIST:
      // Completely replace loans list
      return action.payload;
    default:
      // Don't change loans list
      return state;
  }
}

export default signedInReducer;