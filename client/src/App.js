import Notification from "./Components/Notification";
import "./Firebase";
import Homepage from "./Components/FreeComponents/Homepage";
import Register from "./Components/FreeComponents/Register";
import Login from "./Components/FreeComponents/Login";
import Navbar from "./Components/FreeComponents/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

      <div className="container">
        <Notification/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
