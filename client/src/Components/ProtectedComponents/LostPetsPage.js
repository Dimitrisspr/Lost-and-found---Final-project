import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
//import jwt_decode from "jwt-decode";

function LostPetsPage() {
  const [lost, setLost] = useState([]);

  async function getAllLostPets() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    // const decodedToken = jwt_decode(token);
    // const email = decodedToken.email;
    //console.log(email);
   //setEmail(email);

    const response = await axios.get("http://localhost:8000/auth/getLostPets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLost(response.data);
  }

  useEffect(() => {
    getAllLostPets();
  }, []);


  function SendEmail() {
    
    axios
      .post("http://localhost:8000/send_email")
      .then(() => alert("message sent"))
      .catch(() => alert("didn't sent"));
  }

  return (
    <div>
      {lost.map((pet) => (
        <div key={pet.id}>
          <p>{pet.name}</p>
          <p>{pet.description}</p>
          <img src={pet.photo} width={200} height={200} />
          <p>{pet.location}</p>
          <p>{pet.time}</p>

          <button onClick={SendEmail}>I found this pet!</button>
        </div>
      ))}
    </div>
  );
}

export default LostPetsPage;
