import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../JS/userReducer";

const Login = ({ users }) => {
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogin = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const theAccount = users.filter((user) => user.email === email);

    if (theAccount.length === 0) {
      alert("No user with this email");
      navigate("/signup", { replace: true });
    }
    if (theAccount[0].password === password) {
      dispatch(signin({ email, password }));
      navigate("/dashbord", { replace: true });
    } else {
      alert("Passwords do not match");
      setValidated(false);
      navigate("/signin", { replace: true });
    }
  };

  return (
    <Form autoComplete="no-fill" noValidate validated={validated}>
      <FloatingLabel label="Email" className="mb-3">
        <Form.Control
          required
          autoComplete="no-fill"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          check your password
        </Form.Control.Feedback>
      </FloatingLabel>

      <Button
        variant="primary"
        type="button"
        style={{ margin: "5% 60%" }}
        onClick={(e) => onClickLogin(e)}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Login;
