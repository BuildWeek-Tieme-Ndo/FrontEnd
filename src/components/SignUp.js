import React from 'react';
import SignUpForm from './SignUpForm';

const SignUp = props => {

  return (
    <div>
      <SignUpForm history={props.history} />
    </div>
  )
}

export default SignUp;