import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./HomepageStyle.css";

function NavbarComp() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/">Lost and Found</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {token ? (
                <>
                  <Nav.Link href="/foundpet">I found a pet</Nav.Link>
                  <Nav.Link href="/lostpet">I lost my pet</Nav.Link>
                  <Nav.Link href="/getLostPets">Lost pets!</Nav.Link>
                  <Nav.Link href="/getFoundPets">Found pets!</Nav.Link>
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/register">Register</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/about_us">About Us</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
