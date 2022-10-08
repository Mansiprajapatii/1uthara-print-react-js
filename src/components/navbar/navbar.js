import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import Search from "./Search"
import "./search.css"


export default function navbar() {
  return (
    <div>
       <Navbar 
      collapseOnSelect
      expand="md"
      bg="#163eab"
      variant="light"
      className="px-6 py-10"
    //   fixed="top"
    style={{backgroundColor: "#163eab"}} >
      <Navbar.Brand style={{color: "white", fontSize:40, marginLeft:50}} >Uthara Print</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto align-items-end px-3" style={{color: "white", fontSize:20, marginLeft:50}}>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Products</Nav.Link>
        </Nav>
        <Nav className="ml-1 align-items-end px-1">
          <Search />
          <Nav.Link className="pl-20 ">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
