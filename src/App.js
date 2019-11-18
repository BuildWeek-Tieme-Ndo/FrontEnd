import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './utils/PrivateRoute';

import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Summary from './components/Summary';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Tieme Ndo</h1>
      <Switch>
        <Private path="/summary" component={Summary} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;