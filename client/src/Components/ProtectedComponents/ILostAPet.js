import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fcmid } from "../../Firebase";

function ILostAPet() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  //let ownersID = "";
  let ownersFCMID = fcmid;
  const navigate = useNavigate();

  async function LostPetForm(e) {
    e.preventDefault();
    let lostPet = { name, description, photo, location, time };

    const token = localStorage.getItem("token");
    await axios.post("http://localhost:8000/auth/lostpet", lostPet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate("/getLostPets");
  }

  function covertToBase64(e) {
    console.log(e);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setPhoto(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  }

  return (
    <div>
      <form onSubmit={LostPetForm}>
        <label htmlFor="name">Pets name</label>
        <input
          type="text"
          value={name}
          placeholder="pets name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Pets Description</label>
        <input
          type="textarea"
          value={description}
          placeholder="pets description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="photo">Pets Photo</label>
        <input
          type="file"
          filename="file"
          placeholder="pets photo"
          accept="image/*"
          onChange={covertToBase64}
        />
        {photo == "" || photo == null ? (
          ""
        ) : (
          <img width={100} height={100} src={photo} />
        )}
        <label htmlFor="location">Where you lost it</label>
        <input
          type="text"
          value={location}
          placeholder="Where you lost it"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="time">When you lost it</label>
        <input
          type="text"
          value={time}
          placeholder="When you lost it"
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit" onClick={LostPetForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ILostAPet;
