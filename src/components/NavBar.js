import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../images/logo.jpg'
const NavBar = props => {

  console.log("Nav props:", props);
  const logOut = () => {
    localStorage.clear();
    props.history.push('/');
  }

  if (localStorage.getItem('token')) { // We're logged in
    return (
      <div className="main-nav">
        <img src={logo} alt='Tieme Ndo'/>
        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/reports">Reports</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/loans">Loans</NavLink>
        </nav>
        <div>{localStorage.getItem('userName')}</div>
        <button onClick={logOut}>Log Out</button>
      </div>
    )
  }
  else { // Logged out
    return (
      <div className="main-nav">
        <img src={logo} alt='Tieme Ndo'/>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </nav>
      </div>
    )
  }
}

export default withRouter(NavBar);