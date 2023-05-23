import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function IFoundAPet() {
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  async function petFound(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const foundpet = { description, photo, location, time };
    await axios.post("http://localhost:8000/auth/foundpet", foundpet, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate("/getFoundPets");

    console.log(foundpet);
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
      <form onSubmit={petFound}>
        <label htmlFor="description">Desciption</label>
        <input
          type="text"
          placeholder="Describe the pet here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          filename="file"
          accept="image/*"
          placeholder="Put a picture of the pet here"
          onChange={covertToBase64}
        />
        {photo == "" || photo == null ? (
          ""
        ) : (
          <img width={100} height={100} src={photo} />
        )}
        <label htmlFor="description">Place</label>
        <input
          type="text"
          placeholder="Where you found the pet"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="time">Time</label>
        <input
          type="text"
          placeholder="When you found the pet"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit" onClick={petFound}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default IFoundAPet;
