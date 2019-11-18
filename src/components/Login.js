import React from './node_modules/react';

const Login = () => {

  const fakeLogin = () => {
    localStorage.setItem('token', "Secret decoder ring.");
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={fakeLogin}>Fake Login!</button>
    </div>
  )
}

export default Login;