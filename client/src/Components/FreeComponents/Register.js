import React from "react";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  try {
    async function handleSubmit(e) {
      e.preventDefault();
      let newUser = { username, email, password };

      let response = await axios.post(
        "http://localhost:8000/register",
        newUser
      );
      if (response.status === 200) {
        alert(response.data.msg);
      } else {
        alert("try again");
      }
      console.log(response);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <label for="password">Password</label>
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
