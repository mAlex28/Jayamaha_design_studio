import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"

import "./Navbar.css"
import Logo from "../../assets/images/logo.png"

const CustomNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar-header"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo of the jayamaha design studio"
              src={Logo}
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto" activeKey="1" defaultActiveKey="/">
              <Nav.Link to="/" eventKey="1" as={Link} className="navbar-names">
                Home
              </Nav.Link>
              <Nav.Link
                to="/about-us"
                eventKey="2"
                as={Link}
                className="navbar-names"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                to="/portfolio"
                eventKey="3"
                as={Link}
                className="navbar-names"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                to="/services"
                eventKey="5"
                as={Link}
                className="navbar-names"
              >
                Services
              </Nav.Link>
              <Nav.Link
                to="/how-it-works"
                eventKey="6"
                as={Link}
                className="navbar-names"
              >
                How it works
              </Nav.Link>
              <Nav.Link
                to="/faq"
                eventKey="7"
                as={Link}
                className="navbar-names"
              >
                FAQs
              </Nav.Link>
              <Nav.Link
                to="/contact"
                eventKey="4"
                as={Link}
                className="navbar-names"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="navbar-mailto-nav">
            <div className="navbar-mailto">
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="#"
                onClick={(e) => {
                  window.location.href =
                    "mailto:jayamahadesignsstudio@gmail.com"
                  e.preventDefault()
                }}
              >
                <div>
                  <span className="navbar-mailto-text">
                    <FaEnvelope
                      style={{
                        paddingRight: "2px",
                        fontSize: "18px",
                        color: "#8b5e3b",
                      }}
                    />{" "}
                    jayamahadesignsstudio@gmail.com
                  </span>
                </div>
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
