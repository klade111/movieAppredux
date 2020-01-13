import React from 'react';
import Home from './components/home'
import Discreption from  './components/discreption'

import './App.css';
import {BrowserRouter as Router, Route, } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router className="App">
       <Route exact path='/' component={Home}/>
       <Route path='/discreption/:id'component={Discreption}/>
      </Router>
    </div>
    
  );
}

export default App;
