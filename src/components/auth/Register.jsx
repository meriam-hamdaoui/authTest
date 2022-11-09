import React, { useState } from "react";
import {
  InputGroup,
  Form,
  Button,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signup } from "../../JS/userReducer";
import { emailRegEx } from "../constant/constants";

const Register = ({ users }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form validation
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState({
    pic: "/images/user.png",
    username: "",
    email: "",
    password: "",
  });

  // function to detect change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
    // console.log("change", user);
  };

  // register function on click
  const createAccount = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const findUser = users.filter(
      (user) =>
        user.email === newUser.email && user.password === newUser.password
    );

    if (findUser.length !== 0) {
      setValidated(false);
      alert("this user aleardy exists");
    }
    if (validated) {
      dispatch(signup(newUser));
      navigate("/signin");
    }
  };

  return (
    <Form autoComplete="no-fill" noValidate validated={validated}>
      <Container style={{ position: "relative" }} expand="lg" fluid>
        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            autoComplete="no-fill"
            required
            type="text"
            name="username"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            required.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel label="Email" className="mb-3">
          <Form.Control
            required
            autoComplete="no-fill"
            type="email"
            name="email"
            pattern={emailRegEx}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            enter a valid email.
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel label="Password">
          <Form.Control
            required
            autoComplete="no-fill"
            type="password"
            name="password"
            onChange={handleChange}
            min={8}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          />
          <Form.Control.Feedback type="invalid">
            <ul>
              <small>
                Password length must be between 8 and 12 with at least:
              </small>
              <li>
                <small>1 Number</small>
              </li>
              <li>
                <small>1 upperCase letter</small>
              </li>
            </ul>
          </Form.Control.Feedback>
        </FloatingLabel>
        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "7%",
          }}
        >
          <Button
            variant="danger"
            onClick={() => navigate("/", { replace: true })}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="primary"
            onClick={(e) => createAccount(e)}
          >
            Create
          </Button>
        </div>
      </Container>
    </Form>
  );
};

export default Register;
