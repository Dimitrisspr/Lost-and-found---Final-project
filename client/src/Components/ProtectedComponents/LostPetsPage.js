import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import API_URL from "../config";

function LostPetsPage() {
  const [lost, setLost] = useState([]);
  const [modal, setModal] = useState(false);
  const [petId, setPetId] = useState("");
  const token = localStorage.getItem("token");

  async function getAllLostPets() {
    if (!token) {
      return;
    }

    const response = await axios.get(`${API_URL}/auth/getLostPets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // const response = await axios.get("http://localhost:8000/auth/getLostPets", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    setLost(response.data);
  }

  useEffect(() => {
    getAllLostPets();
  });

  async function SendEmail() {
    if (!token) {
      return;
    }

    // await axios
    //   .post(
    //     "http://localhost:8000/auth/send_email",
    await axios
      .post(
        `${API_URL}/auth/send_email`,
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
      <p class="h3">
        Here the lost pets are displayed. If you found any of these pets press
        the button and the owner of the pet will be informed by email
      </p>

      {lost.map((pet) => (
        <div key={pet._id}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardImage
                src={pet.photo}
                width={200}
                height={200}
                alt="pet"
                fluid
              />
              <MDBCardTitle>{pet.name}</MDBCardTitle>
              <MDBCardText>{pet.description}</MDBCardText>
              <MDBCardText>{pet.location}</MDBCardText>
              <MDBCardText>
                {" "}
                {pet.date && pet.date.day && pet.date.month && pet.date.year
                  ? `${pet.date.day}/${pet.date.month}/${pet.date.year}`
                  : ""}
              </MDBCardText>
              <MDBCardText>{pet.time}</MDBCardText>
            </MDBCardBody>
            <MDBBtn onClick={() => toggleModal(pet._id)}>
              I found this pet!
            </MDBBtn>
          </MDBCard>
        </div>
      ))}
      <MDBModal show={modal} setShow={setModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Warning</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Pressing the button will send an email to the pets owner.Before
              you press the button make sure you have the right pet.
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>
                Close
              </MDBBtn>
              <MDBBtn
                onClick={() => {
                  SendEmail();
                  toggleModal();
                }}
              >
                Send the email
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
export default LostPetsPage;
