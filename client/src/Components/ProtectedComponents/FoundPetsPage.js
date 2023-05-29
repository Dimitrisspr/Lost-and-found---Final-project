import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const bootstrap = require('bootstrap')

function FoundPetsPage() {
  const [founds, setFounds] = useState([]);

  async function getAllFoundPets() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await axios.get("http://localhost:8000/auth/getFoundPets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFounds(response.data);
  }

  useEffect(() => {
    getAllFoundPets();
  }, []);

  return (
    <div>
      {founds.map((pet) => (
        <div key={pet.id}>
          <p>{pet.description}</p>
          <img src={pet.photo}width={200} height={200}/>
          <p>{pet.location}</p>
          <p>{pet.time}</p>
        </div>
      ))}
    </div>
  );
}

export default FoundPetsPage;
