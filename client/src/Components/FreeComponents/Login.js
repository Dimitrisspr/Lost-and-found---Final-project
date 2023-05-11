import React from "react";
import { useState } from "react";
import PostLoginData from "./PostLoginData";
//import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const navigate = useNavigate()

  async function handleSubmit(e, userData) {
    e.preventDefault();
    let response = await PostLoginData(userData);

    if (response) {
      alert("Logged in successfully!");
    }
    if (response.status === 200) {
      localStorage.setItem("token", response.data);
    } else {
      console.log("incorrect username or password");
    }
  }
  return (
    <div>
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
          type="text"
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
        <button>Login</button>
      </form>
      {/* <button onClick={navigate}>If you haven't register yet, do it here</button> */}
    </div>
  );
}

export default Login;
