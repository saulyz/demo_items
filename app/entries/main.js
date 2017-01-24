/*Import inhouse styling*/
import "../styles/main.scss";

/*Import dependencies*/
import React from 'react';
import ReactDOM from 'react-dom';

import { Nav } from 'react-bootstrap'; 
import { NavItem } from 'react-bootstrap'; 
import { Navbar } from 'react-bootstrap'; 
import { NavbarHeader } from 'react-bootstrap'; 


function Header (props) {
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

function Application (props) {
  return (
    <div className="application">
      <Header title={props.title}/>
      <div className="content">
        <div className="card">
          <h3 className="product-title">Product name</h3>
          <div className="product-price">$ XXX</div>
        </div>
      </div>
    </div>
    );
}

ReactDOM.render(<Application />, document.getElementById('root'));