import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Initial from './Components/Initial'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Initial/>
    </div>
  );
}

export default App;
