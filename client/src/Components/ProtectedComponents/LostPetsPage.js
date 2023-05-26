import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function LostPetsPage() {
  const [lost, setLost] = useState([]);
  const token = localStorage.getItem("token");

  async function getAllLostPets() {
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

  async function SendEmail() {
    await axios.post("http://localhost:8000/auth/send_email", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );
    console
      .log(token)
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
