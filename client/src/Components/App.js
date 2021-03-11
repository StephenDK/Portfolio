import React, { Fragment } from 'react';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navigation/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
