import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar className="p-3 nav-fix" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{color:"#ffffff", fontWeight:'700', fontSize:'24px', lineHeight:'31.25px',
      letterSpacing:'-0.29px'}}>Startup-3</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "right" }}>
          <Nav
            className=" d-flex w-100 justify-content-end my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2" >
              Overview
            </Nav.Link>
            <Nav.Link href="#action3">Prices</Nav.Link>
            <Nav.Link href="#action4">Blog</Nav.Link>
            <Nav.Link href="#action5">Feedback</Nav.Link>
          </Nav>
          <Nav.Link
            href="#form"
            style={{
              height: "40px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              background: "#E93A7D",
              padding: "1rem",
              borderRadius: "100px",
              fontWeight: "500",
            }}
          >
            Purchase
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
