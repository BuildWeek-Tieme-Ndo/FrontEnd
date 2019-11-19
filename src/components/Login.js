import React from 'react';
import LoginForm from './LoginForm'

const Login = () => {

  const fakeLogin = () => {
    localStorage.setItem('token', "Secret decoder ring.");
  }

  return (
    <div>
      <button onClick={fakeLogin}>Temporary Fake Login!</button>
      <LoginForm />
    </div>
  )
}

export default Login;