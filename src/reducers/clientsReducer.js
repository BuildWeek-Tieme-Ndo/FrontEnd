export const CLIENTS_NEW_LIST = 'CLIENTS_NEW_LIST';
export const CLIENT_ADD = 'CLIENT_ADD';
export const CLIENT_MODIFY = 'CLIENT_MODIFY';
export const CLIENT_DELETE = 'CLIENT_DELETE';

const signedInReducer = (state=[], action) => {
  switch(action.type) {
    case CLIENTS_NEW_LIST:
      // Completely replace client list
      return action.payload;
    case CLIENT_ADD:
      return state.push(action.payload);
    default:
      // Don't change client list
      return state;
  }
}

export default signedInReducer;