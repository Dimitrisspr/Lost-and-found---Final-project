import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./HomepageStyle.css";
import API_URL from "../config";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  try {
    async function handleSubmit(e) {
      e.preventDefault();
      let newUser = { username, email, password };
      

     const response = await axios.post(`${API_URL}/register`, newUser);
      if (response) {
        alert("Registered Successfully");
      } else {
        console.log("didn't register");
      }
      console.log(response);
      navigate("/login");
    }

    return (
      <>
        <div className="page-container">
          <Form
            onSubmit={handleSubmit}
            className="text-center"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <br />
            <br />
            <Form.Group className="mb-2" controlId="formBasicBtn">
              <Form.Label>
                <small class="text-muted">
                  Already registered?
                  <br />
                  <a href="/login">Login</a>
                </small>{" "}
              </Form.Label>
            </Form.Group>
          </Form>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Register;
