import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

function FoundPetsPage() {
  const [founds, setFounds] = useState([]);

  async function getAllFoundPets() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await axios.get(
      "http://localhost:8000/auth/getFoundPets",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setFounds(response.data);
  }

  useEffect(() => {
    getAllFoundPets();
  }, []);

  return (
    <>
      {founds.map((pet) => (
        <div key={pet.id}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardImage
                src={pet.photo}
                width={200}
                height={200}
                alt="pet"
                fluid
              />
              <MDBCardText>
                <i>Pets description: </i>
                {pet.description}
              </MDBCardText>
              <MDBCardText>
                <i>Pets latitude and longitude: </i>
                {pet.location && `${pet.location.lat}, ${pet.location.lng}`}
              </MDBCardText>
              <MDBCardText>
                <i>Time the pet was found: </i>
                {pet.time}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </>
  );
}

export default FoundPetsPage;
