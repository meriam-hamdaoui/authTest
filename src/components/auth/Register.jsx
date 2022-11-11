import React, { useState } from "react";
import { Form, Button, Container, FloatingLabel, Col } from "react-bootstrap";
import { emailRegEx } from "../constant/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../JS/userReducer";

const Register = () => {
  const userList = useSelector((state) => state.user);
  // console.log("userList", userList);
  // console.log(typeof userList);

  const [validated, setValidated] = useState(false);
  const [showOrHide, setShowOrHide] = useState(false);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newAccount = {
    admin: false,
    auth: false,
    pic: "/images/user.png",
    userName: userName,
    email: email,
    password: password,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createAccount = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const findUser = userList.find((user) => user.email === email);
    // console.log(typeof findUser);

    if (findUser) {
      alert("this user already exist, login?");
      navigate("/signin", { replace: true });
    } else if (validated) {
      dispatch(signup(newAccount));
      navigate("/signin", { replace: true });
    }
  };

  return (
    <Form noValidate validated={validated}>
      <Container style={{ position: "relative" }} expand="lg" fluid>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomUsername"
          style={{ width: "100%" }}
        >
          <FloatingLabel
            label="Username"
            className="mb-3"
            style={{ color: "gray" }}
          >
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          controlId="validtionCustomEmail"
          style={{ width: "100%" }}
        >
          <FloatingLabel label="Email" className="mb-3">
            <Form.Control
              required
              autoComplete="no-fill"
              type="email"
              name="email"
              pattern={emailRegEx}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              enter a valid email.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustomPassword"
          style={{ width: "100%" }}
        >
          <FloatingLabel label="Password">
            <Form.Control
              required
              autoComplete="no-fill"
              type={showOrHide ? "text" : "password"}
              name="password"
              min={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </Form.Group>
        <Form.Group className="mb-3" style={{ margin: "2%" }}>
          <Form.Check.Input
            name="showOrHide"
            type="checkbox"
            defaultChecked={false}
            onClick={() =>
              setShowOrHide((showOrHide) => (showOrHide ? false : true))
            }
          />
          <Form.Check.Label>Show password</Form.Check.Label>
        </Form.Group>
        <Form.Group className="mb-3 d-flex justify-content-between">
          <Button
            type="button"
            variant="outline-secondary"
            onClick={() => navigate("/", { repalce: true })}
          >
            cancel
          </Button>
          <Button
            type="button"
            variant="outline-primary"
            onClick={(e) => createAccount(e)}
          >
            Submit
          </Button>
        </Form.Group>
      </Container>
    </Form>
  );
};

export default Register;
