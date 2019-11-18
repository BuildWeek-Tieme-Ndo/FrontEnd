import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Forwards to component if 'token' is found in localStorage,
// Otherwise, redirects to '/' because we aren't logged in.
export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? ( // Are we logged in?
        <Component {...props} />
        ) : (
        <Redirect to="/" />
      )
    }
  />
);