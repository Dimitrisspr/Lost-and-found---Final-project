import React from "react";
import axios from "axios";
import { useState } from "react";

function ILostAPet() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  let ownersID = "";
  let ownersFCMID = "";

  try {
    async function handleSubmit(e) {
      e.preventDefault();
      let lostPet = { name, description, photo, location, time };
      const response = await axios.post(
        "http://localhost:8000/lostpet",
        lostPet
      );
      console.log(response);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Pets name</label>
          <input type="text" value={name} placeholder="pets name" onChange={(e)=> setName (e.target.value)}/>
          <label htmlFor="description">Pets Description</label>
          <input type="textarea" value={description} placeholder="pets description" onChange={(e)=> setDescription (e.target.value)}/>
          <label htmlFor="photo">Pets Photo</label>
          <input type="text" value={photo} placeholder="pets photo" onChange={(e)=> setDescription (e.target.value)}/>
          <label htmlFor="location">Where you lost it</label>
          <input type="text" value={location} placeholder="Where you lost it" onChange={(e)=> setDescription (e.target.value)}/>
          <label htmlFor="time">When you lost it</label>
          <input type="text" value={time} placeholder="When you lost it" onChange={(e)=> setDescription (e.target.value)}/>
        </form>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default ILostAPet;
