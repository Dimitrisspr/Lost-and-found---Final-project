import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {fcmid} from "../../Firebase";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let ownersFCMID = '';
  const navigate = useNavigate();

  try {
    async function handleSubmit(e) {
      e.preventDefault();
      let newUser = { username, email, password, ownersFCMID };

      //newUser["ownersid"] = newUser._id;
      
      newUser["ownersFCMID"] = fcmid;
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

//current token for client:  cgJhLN157NmmVw56dCx91y:APA91bHGuh_JzlNpvxspXsaYd462yobGbnejQI672SYyAQgv7hCPdP_VOSUY7IfJYDqiNRfnyQxZiLtNpjU6_9aV7hpgmr2DEVcIHGwmchUNyJf3ZIXW004Hgq3jeop7YGumW9g-z6QV

//cgJhLN157NmmVw56dCx91y:APA91bHGuh_JzlNpvxspXsaYd46…gmr2DEVcIHGwmchUNyJf3ZIXW004Hgq3jeop7YGumW9g-z6QV

//cgJhLN157NmmVw56dCx91y:APA91bHGuh_JzlNpvxspXsaYd462yobGbnejQI672SYyAQgv7hCPdP_VOSUY7IfJYDqiNRfnyQxZiLtNpjU6_9aV7hpgmr2DEVcIHGwmchUNyJf3ZIXW004Hgq3jeop7YGumW9g-z6QV

//current token for client:  cgJhLN157NmmVw56dCx91y:APA91bHGuh_JzlNpvxspXsaYd462yobGbnejQI672SYyAQgv7hCPdP_VOSUY7IfJYDqiNRfnyQxZiLtNpjU6_9aV7hpgmr2DEVcIHGwmchUNyJf3ZIXW004Hgq3jeop7YGumW9g-z6QV
