import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../../stylesheets/NavBarr.css";
export class NavBarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBackground: "transparent"
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "transparent" : "#fff";

      this.setState({ navBackground: backgroundcolor });
    });
  }
  render() {
    return (
      <Navbar
        style={{ backgroundColor: this.state.navBackground }}
        collapseOnSelect
        fixed="top"
        expand="lg"
        className="navbar"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="navLogo mx-auto img-fluid"
            alt="Fly-Pyramid-Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: "#af9a7d",
                textDecoration: "none",
                borderBottom: "5px solid #af9a7d"
              }}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/rooms"
              activeStyle={{
                color: "#af9a7d",
                textDecoration: "none",
                borderBottom: "5px solid #af9a7d"
              }}
            >
              Rooms
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      // </Container>
    );
  }
}
