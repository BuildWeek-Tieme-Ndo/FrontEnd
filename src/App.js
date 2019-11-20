import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './utils/PrivateRoute';

import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Summary from './components/Summary';
import ClientList from './components/ClientList';
import LoanList from './components/LoanList';
import Payments from './components/Payments';
import Dashboard from './components/Dashboard';
import logo from './images/logo.jpg'

import './App.css';

function App() {
  // TODO: Move logo to navbar, add username to navbar 
  return (
    <div className="App">
      <NavBar />
      <h1>Tieme Ndo</h1>
      <img src={logo} alt='Tieme Ndo logo'/>
      <Switch>
        <Private path="/reports" component={Summary} />
        <Private path="/loans" component={LoanList} />
        <Private path="/clients" component={ClientList} />
        <Private path="/payments" component={Payments} />
        <Private path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;