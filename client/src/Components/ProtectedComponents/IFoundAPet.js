import axios from "axios";
import React from "react";
import { useState, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

const center = {
  lat: 40.629269,
  lng: 22.947412,
};

function IFoundAPet() {
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState(center);
  const [time, setTime] = useState("");
  const [draggable, setDraggable] = useState(false);
  const markerRef = useRef(null);
  const navigate = useNavigate();

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setLocation(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

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
    <>
      <div className="page-container">
        <Form
          onSubmit={petFound}
          className="text-center"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <Form.Label>
            <h3>Declare the found pet</h3>
          </Form.Label>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Describe the pet here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Upload photo</Form.Label>
            <Form.Control type="file" size="sm" onChange={covertToBase64} />
            {photo === "" || photo === null ? (
              ""
            ) : (
              <img width={100} height={100} src={photo} alt="pet" />
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMap">
            <Form.Label>Where did you find this pet?</Form.Label>
            
            <Form.Control
              type="map"
              value={JSON.stringify(location)}
              onChange={(e) => setLocation(JSON.parse(e.target.value))}
            />
            <MapContainer
              className="map"
              style={{ width: "250px", height: "250px" }}
              center={center}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={location}
                ref={markerRef}
              >
                <Popup minWidth={90}>
                  <span onClick={toggleDraggable}>
                    {draggable
                      ? "Marker is draggable"
                      : "Click here to make marker draggable"}
                  </span>
                </Popup>
              </Marker>
            </MapContainer>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="number"
              placeholder="When you found this pet?"
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

export default IFoundAPet;
