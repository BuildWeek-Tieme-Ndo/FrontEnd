import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './utils/PrivateRoute';

import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Summary from './components/Summary';
import Client from './components/Client';
import Payments from './components/Payments';
import logo from '../src/images/logo.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar /> {/* TODO: Move inside individual pages? */}
      <h1>Tieme Ndo</h1>
      <img src={logo} alt='Tieme Ndo logo'/>
      <Switch>
        <Private path="/summary" component={Summary} />
        <Private path="/client" component={Client} />
        <Private path="/payments" component={Payments} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;