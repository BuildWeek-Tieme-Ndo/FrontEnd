
// Used for determining when update the status bar
const signedInReducer = (state=false, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
}

export default signedInReducer;