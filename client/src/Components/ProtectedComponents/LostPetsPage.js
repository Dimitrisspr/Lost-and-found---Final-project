import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function LostPetsPage() {
  const [lost, setLost] = useState([]);
  const [modal, setModal] = useState(false);
  const [petId, setPetId] = useState("");
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
  } );

  async function SendEmail() {
    if (!token) {
      return;
    }

    await axios
      .post(
        "http://localhost:8000/auth/send_email",
        { petId: petId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => alert("Email sent to the owner"))
      .catch(() => alert("Could not send email"));
  }

  const toggleModal = (id) => {
    setPetId(id);

    console.log(petId);
    setModal(!modal);
  };

  return (
    <>
      <div>
        {lost.map((pet) => (
          <div key={pet._id}>
            <p>{pet.name}</p>
            <p>{pet.description}</p>
            <img src={pet.photo} width={200} height={200} alt="pet"/>
            <p>{pet.location}</p>
            <p>{pet.date && pet.date.day && pet.date.month && pet.date.year ? `${pet.date.day}/${pet.date.month}/${pet.date.year}` : ""}</p>

            {/* <p>{`${pet.date.day}/${pet.date.month}/${pet.date.year}`}</p> */}
            <p>{pet.time}</p>

            <Button 
              onClick={() => toggleModal(pet._id)}
            >
              I found this pet!
            </Button>{" "}
          </div>
        ))}
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <h2>Are you sure its the same pet?</h2>
              <p>
                Before you press the button please make sure you have the right
                pet!{" "}
              </p>
              <button
                onClick={() => {
                  toggleModal();
                  SendEmail();
                }}
              >
                Yes send the e-mail!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default LostPetsPage;
