// This is not a necessary function.
// Just a placeholder to keep Redux happy until
// we add actual reducers
const signedInReducer = (state=false, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
}

export default signedInReducer;