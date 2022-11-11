import React, { useState } from "react";
import { Form, Button, Container, FloatingLabel, Col } from "react-bootstrap";
import { emailRegEx } from "../constant/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../JS/userReducer";

const Login = () => {
  const userList = useSelector((state) => state.user);

  const [validated, setValidated] = useState(false);
  const [showOrHide, setShowOrHide] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let findUser = {};

  const handleLogin = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    findUser = userList.find((user) => user.email === email);

    if (!findUser) {
      alert("no such user with this email, signup");
      navigate("/signup", { replace: true });
    } else if (findUser.password !== password) {
      setPassword("");
    } else if (validated) {
      dispatch(signin({ email: email, password: password }));
      if (findUser.admin) {
        navigate("/dashbord");
      } else {
        navigate("/profile");
      }
    }
  };

  return (
    <Form noValidate validated={validated}>
      <Container style={{ position: "relative" }} expand="lg" fluid>
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
              value={password}
              pattern={findUser && findUser.password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              password don't mutch
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" style={{ margin: "2%" }} expand="lg">
          <Form.Check.Input
            name="showOrHide"
            type="checkbox"
            defaultChecked={false}
            onClick={() =>
              setShowOrHide((showOrHide) => (showOrHide ? false : true))
            }
          />
          <Form.Check.Label>&nbsp;Show password</Form.Check.Label>
        </Form.Group>
        <Button type="button" onClick={handleLogin}>
          Submit
        </Button>
      </Container>
    </Form>
  );
};

export default Login;
