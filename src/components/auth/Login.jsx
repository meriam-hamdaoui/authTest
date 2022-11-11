import React, { useState } from "react";
import { Form, Button, Container, FloatingLabel, Col } from "react-bootstrap";
import { emailRegEx } from "../constant/constants";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const [showOrHide, setShowOrHide] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
          <Form.Check.Label>Show password</Form.Check.Label>
        </Form.Group>
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
    </Form>
  );
};

export default Login;
