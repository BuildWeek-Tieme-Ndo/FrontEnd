import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from './utils/PrivateRoute';

import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Summary from './components/Summary';
import ClientList from './components/ClientList.js';
import LoanList from './components/LoanList';
import Payments from './components/Payments';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {
  // TODO: Move logo to navbar, add username to navbar 
  return (
    <div className="App">
      <NavBar />
      <h1>Tieme Ndo</h1>
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

// TODO: Add some individual routes, like this:
/* <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        exact
        path="/update-movie/:id"
        render={props => (
          <UpdateForm {...props} movies={movies} updateMovies={setMovies} />
        )}
      />  */





export default App;