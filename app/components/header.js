/*Import dependencies*/
import React, { Component } from 'react';
import { Link } from 'react-router';

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
	          <Link to="/">Demo items Shop</Link>
	        </Navbar.Brand>
	      </Navbar.Header>
	      <Nav>
	        <NavItem eventKey={1} href="#">Favorites</NavItem>
	      </Nav>
	    </Navbar>
	  );
  }
 
}
 
export default Header;