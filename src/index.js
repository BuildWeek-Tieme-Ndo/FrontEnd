import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// The composer allows us to use both thunk middleware AND the Redux dev tools.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
