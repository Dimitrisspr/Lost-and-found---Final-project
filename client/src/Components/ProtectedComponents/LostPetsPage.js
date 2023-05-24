import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Register, {email} from "../FreeComponents/Register";

function LostPetsPage() {
  const [lost, setLost] = useState([]);

  async function getAllLostPets() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

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

  function getEmail() {
    console.log(email);
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

          {/* Add more fields as needed */}
        </div>
      ))}
      <button onClick={getEmail}>i found this pet!</button>
    </div>
  );
}

export default LostPetsPage;
