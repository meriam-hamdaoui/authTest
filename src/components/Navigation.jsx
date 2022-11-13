import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { VscSignIn, MdOutlineSwitchAccount, FiLogOut } from "react-icons/all";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../JS/userReducer";

const linkStyle = {
  color: "white",
};

const navBar = {
  width: "100%",
  position: "fixed",
  transition: "0.4s",
  top: 0,
  zIndex: 1,
};

const Navigation = () => {
  const location = useLocation().pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="primary" expand="lg" style={navBar}>
      <Container fluid style={{ marginLeft: "5%" }}>
        <Navbar.Brand href="/" style={linkStyle}>
          Perfect Purity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {location === "/profile" || location === "/dashbord" ? (
            <Nav className="me-auto" style={{ marginLeft: "70%" }}>
              <Nav.Link
                href="/"
                style={linkStyle}
                onClick={() => handleLogout()}
              >
                logout <FiLogOut />
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto" style={{ marginLeft: "70%" }}>
              <Nav.Link href="/signup" style={linkStyle}>
                Signup <MdOutlineSwitchAccount />
              </Nav.Link>
              <Nav.Link href="/signin" style={linkStyle}>
                Signin <VscSignIn />
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
