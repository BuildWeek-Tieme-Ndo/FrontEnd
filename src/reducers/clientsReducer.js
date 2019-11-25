import * as c from '../actions';

const clientsReducer = (state=[], action) => {
  switch(action.type) {
    case c.GET_CLIENT_LIST:
      // Completely replace client list
      return action.payload;
    case c.ADD_CLIENT:
      return state.push(action.payload);
    case c.MODIFY_CLIENT:
      return state; // MODIFY
    case c.DELETE_CLIENT:
      return state; // DELETE
    default:
      // Don't change client list
      return state;
  }
}

export default clientsReducer;