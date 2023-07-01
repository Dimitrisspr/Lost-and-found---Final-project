import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import API_URL from "../config";


function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  try {
    const refreshPage = () => {
      window.location.reload();
    };

    async function loginUser(e) {
      e.preventDefault();

      let loggedIn = { username, email, password };

      
      const response = await axios.post(`${API_URL}/login`, loggedIn);

      if (response) {
        alert("logged in");
        navigate("/")
      }

      if (response.status === 200) {
        localStorage.setItem("token", response.data);

        refreshPage();
      } else {
        console.log("wrong password");
      }
    }

    return (
      <>
        <div className="page-container">
          <Form
            onSubmit={loginUser}
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
              Login
            </Button>
          </Form>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
export default Login;
