import React from 'react';
import LoginForm from './LoginForm'

const Login = props => {

  // const fakeLogin = props => {  // TODO: Remove
  //   localStorage.setItem('token', "Secret decoder ring.");
  // }
  // <button onClick={fakeLogin}>Temporary Fake Login!</button>

  return (
    <div>

      <LoginForm history={props.history} />
    </div>
  )
}

export default Login;