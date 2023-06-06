import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function ILostAPet() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  async function LostPetForm(e) {
    e.preventDefault();
    let lostPet = { name, description, photo, location, date, time };

    const token = localStorage.getItem("token");
    await axios.post("http://localhost:8000/auth/lostpet", lostPet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate("/getLostPets");
  }

  function covertToBase64(e) {
   // console.log(e);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      //console.log(reader.result);
      setPhoto(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  }

  return (
    <>
    <div className="page-container">
      <Form
        onSubmit={LostPetForm}
        className="text-center"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Form.Label><h3>Declare your lost pet</h3></Form.Label>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Pets Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pets name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Pets description</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Describe the pet"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload a photo of your pet</Form.Label>
          <Form.Control type="file" size="sm" onChange={covertToBase64} />
          {photo === "" || photo === null ? (
            ""
          ) : (
            <img width={100} height={100} src={photo} alt="pet" />
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Where did you lost your pet?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <Calendar
          value={date}
          onChange={setDate}
          inputPlaceholder="Select a day"
          shouldHighlightWeekends
        />
        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="number"
            placeholder="When did you lost your pet?"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
      </div>
    </>
  );
}

export default ILostAPet;
