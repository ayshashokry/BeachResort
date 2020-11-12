import "./App.css";
// importing Packages
import { BrowserRouter as Router, Route } from "react-router-dom";
// importing Components
import { Home } from "./components/pages/Home";
import { Rooms } from "./components/pages/Rooms";
import { Video } from "./components/pages/Video";

import { RoomDetails } from "./components/pages/RoomDetails";
import { NavBarr } from "./components/layout/NavBarr";
import { Errorr } from "./components/pages/Errorr";
import ShowCase from "./components/pages/ShowCase";
import Joyride from "react-joyride";

import React, { Component } from "react";

export default class App extends Component {
 

  render() {

    return (
      <>
        <Router>
          <div className="App">
            <NavBarr />
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:id" component={RoomDetails} />
            <Route exact path="/video" component={ShowCase} />
            <Route exact path="/error" component={Errorr} />
          </div>
        </Router>
      </>
    );
  }
}
