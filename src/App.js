import React from 'react';
import './App.css';
// importing Packages
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// importing Components
import {Home} from './components/pages/Home'
import {Rooms} from './components/pages/Rooms'
import {RoomDetails} from './components/pages/RoomDetails'
import {Navbarr} from './components/layout/NavBarr'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbarr/>
      <Route exact path='/' component={Home} /> 
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:id' component={RoomDetails} />
      </div>
    </Router>
  );
}

export default App;