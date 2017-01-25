/*Import dependencies*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Nav } from 'react-bootstrap'; 
import { NavItem } from 'react-bootstrap'; 
import { Navbar } from 'react-bootstrap'; 
import { NavbarHeader } from 'react-bootstrap'; 


class Header extends Component {
 
  render() {
	  return (
	    <Navbar>
	      <Navbar.Header>
	        <Navbar.Brand>
	          <a href="#">Demo items Shop</a>
	        </Navbar.Brand>
	      </Navbar.Header>
	      <Nav>
	        <NavItem eventKey={1} href="#">Link</NavItem>
	      </Nav>
	    </Navbar>
	  );
  }
 
}
 
export default Header;