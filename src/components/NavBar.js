import React from 'react';

const NavBar = () => {

  const logOut = () => {
    localStorage.clear();
  }

  return (
    <div className="main-nav">
      <nav>
        <a href="/">Home</a>
        <a href="/signup">Signup</a>
        <a href="/client">Manage Clients</a>
        <a href="/payments">Manage Payments</a>
        <a href="/summary">Summary</a>
        <button onClick={logOut}>Log Out</button>
      </nav>
    </div>
  )
}

export default NavBar;