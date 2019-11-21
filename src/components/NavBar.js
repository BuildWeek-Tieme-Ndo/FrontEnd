import React from 'react';
// import { Redirect } from 'react-router-dom';

const NavBar = props => {

  console.log("Nav props:", props);
  const logOut = props => {
    localStorage.clear();
    // FIXME: Neither of these work. Send me home!
    // return (<Redirect to="/" />);
    // props.history.push('/');
  }

  if (localStorage.getItem('token')) { // We're logged in
    return (
      <div className="main-nav">
        <nav>
          <a href="/dashboard">Dashboard</a>
          <a href="/reports">Reports</a>
          <a href="/clients">Clients</a>
          <a href="/loans">Loans</a>
          <button onClick={logOut}>Log Out</button>
        </nav>
      </div>
    )
  }
  else { // Logged out
    return (
      <div className="main-nav">
        <nav>
          <a href="/">Home</a>
          <a href="/signup">Signup</a>
        </nav>
      </div>
    )
  }
}

export default NavBar;