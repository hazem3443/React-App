// import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';

const NavBar = props =>{
    return ( 
        // <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <a className="navbar-brand mb-0 h1">Navbar</a>
        //     <span className="badge badge-primary">{props.productscount}</span>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //       <ul className="navbar-nav">
        //         <li className="nav-item active">
        //           <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link" href="/">Features</a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link" href="/">Pricing</a>
        //         </li>
        //         <li className="nav-item">
        //           <a className="nav-link disabled" href="/">Disabled</a>
        //         </li>
        //       </ul>
        //     </div>
        // </Navbar>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <Navbar.Brand href="/">CountingApp</Navbar.Brand> */}
            <Link className="navbar-brand" to="/">CountingApp</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/app1">ShopingCart</NavLink>
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                
                <NavLink className="nav-link" to="/admin">Admin</NavLink>

                <NavLink className="nav-link" to="/about">About</NavLink>

                <NavLink className="nav-link" to="/login">login</NavLink>

                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                <Nav.Link eventKey={2} className="badge badge-primary text-white">
                    {props.productscount}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
       );
};

 
export default NavBar;