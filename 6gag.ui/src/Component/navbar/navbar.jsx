import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './logo.png';
import './navbar.css';

function NavBar(props) {
        return(
            <Navbar bg="dark" variant="dark">
             <Link to="/">
              <Navbar.Brand>
                <img
                  src={logo}
                  className="d-inline-block align-top logo"
                />
              </Navbar.Brand>
             </Link>
             <Nav className="mr-auto">
              {/* <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/">Create</Link></Nav.Link> */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Create</Nav.Link>
             </Nav>
            </Navbar>
        );
    
}
export default NavBar;