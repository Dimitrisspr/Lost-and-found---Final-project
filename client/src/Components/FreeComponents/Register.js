import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {fcmid} from "../../Firebase";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let ownersid = '';
  const navigate = useNavigate();

  try {
    async function handleSubmit(e) {
      e.preventDefault();
      let newUser = { username, email, password, ownersid };
      
      newUser["ownersid"] = fcmid;
      console.log(newUser);

      let response = await axios.post(
        "http://localhost:8000/register",
        newUser
      );
      if (response) {
        alert("Registered");
      } else {
        console.log("didn't register");
      }
      console.log(response);
      navigate("/login");
    }

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <button>Register</button>
      </form>
    );
  } catch (error) {
    console.log(error);
  }
}

export default Register;
