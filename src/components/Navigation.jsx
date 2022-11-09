import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { VscSignIn, MdOutlineSwitchAccount, FiLogOut } from "react-icons/all";
import { logout } from "../JS/userReducer";
import { useDispatch } from "react-redux";

const style = {
  color: "white",
  textDecoration: "none",
};

const styleNav = {
  dispaly: "flex",
  justifyContent: "space-between",
  //   border: "1px solid red",
  width: "20%",
  margin: "auto 60%",
};

const Navigation = () => {
  const location = useLocation().pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/", { replace: true });
    dispatch(logout());
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container className="d-flex " style={{ width: "90%" }}>
        <Navbar.Brand href="/">Perfect Purity</Navbar.Brand>

        {location !== "/dashbord" && (
          <Nav className="me-auto" style={styleNav}>
            <NavLink to="/signup" style={style}>
              Signup <MdOutlineSwitchAccount />
            </NavLink>
            <NavLink to="signin" style={style}>
              Signin <VscSignIn />
            </NavLink>
          </Nav>
        )}
        {location === "/dashbord" && (
          <Nav className="me-auto" style={styleNav}>
            <Nav.Link onClick={() => logOut()} style={style}>
              logout <FiLogOut />
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;
