import React from "react";
import  Navbar  from "react-bootstrap";
import  NavDropdown  from "react-bootstrap";
import  FormControl  from "react-bootstrap";
import  NavbarBrand  from "react-bootstrap";
import  Container  from "react-bootstrap";
import  Nav  from "react-bootstrap";


function Home() {
    return (
        <>
<Navbar>
  
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  
</Navbar>
        </>
    );
}

export default Home
