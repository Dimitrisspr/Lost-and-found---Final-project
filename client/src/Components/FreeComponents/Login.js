import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
//import { useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const navigate = useNavigate()
  try {
    const refreshPage = () => {
      window.location.reload();
    };

    async function loginUser(e) {
      e.preventDefault();

      let loggedIn = { username, email, password };

      const response = await axios.post(
        "http://localhost:8000/login",
        loggedIn
      );
      //console.log(response);
      if (response) {
        alert("logged in");
      }

       if(response.status === 200) {
        localStorage.setItem("token", response.data);

       // console.log("Logged in Successfully");
      refreshPage();
      } else {
        console.log("wrong password");
      }
    }

    return (
      <div>
        <form onSubmit={loginUser}>
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
            type="text"
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
          <button>Login</button>
        </form>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
export default Login;
