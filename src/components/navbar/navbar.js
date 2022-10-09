import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Search from "./Search";
import "./search.css";
import { Cart } from "react-ionicons";
import { Layers } from 'react-ionicons';
import { Mail } from 'react-ionicons';
import { LogoWhatsapp } from "react-ionicons";

export default function navbar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="#163eab"
        variant="light"
        className="px-4 py-10"
        style={{ backgroundColor: "#1d1a59" }}
      >
        <Navbar.Brand style={{ color: "white", fontSize: 40, marginLeft: 50 }}>
          Uthara Print
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-na" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-1 align-items-end px-3">
            <Search /> 
            <Nav
            className=" align-items-end px-3"
            style={{ color: "white", fontSize: 15, marginLeft: 10 }}>
            <Nav.Link style={{ color: "white" , display:"flex", justifyContent:"space-around"}}> <Layers color={'#ffffff'} height="20px" width="20px" />Order Designs</Nav.Link>
            <Nav.Link style={{ color: "white" , display:"flex", justifyContent:"space-around"}}> <Mail color={'#ffffff'} height="20px" width="20px" />sales@utharaprint</Nav.Link>
            <Nav.Link style={{ color: "white" , display:"flex", justifyContent:"space-around"}}> <LogoWhatsapp color={'#ffffff'} height="20px" width="20px" />020 3239 9280</Nav.Link>     
            <Nav.Link style={{ color: "white" }}>Login/Register</Nav.Link>
          </Nav> 

            <Nav.Link className=" " style={{ color: "white" , marginLeft:5}}>
              <Cart color={" #ffffff"} height="30px" width="30px" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
