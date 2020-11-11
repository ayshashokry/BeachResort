import React, { Component } from 'react'
import {Navbar,Nav, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
export class Navbarr extends Component {
  render() {
    return (
      <>
       <Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to='/'><img scr={logo} alt="Beach Resort"/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to='/'> Home </Link>
      <Link to='/rooms'>Rooms</Link>
     {/* <Button><FaAlignRight className='nav-icon'/></Button> */}
    </Nav>
  </Navbar.Collapse>
</Navbar> 
      </>
    )
  }
}
