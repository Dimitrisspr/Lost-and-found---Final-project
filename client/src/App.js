import Notification from "./Components/Notification";
import "./Firebase";
import Homepage from "./Components/FreeComponents/Homepage";
import Register from "./Components/FreeComponents/Register";
import Login from "./Components/FreeComponents/Login";
import Navbar from "./Components/FreeComponents/Navbar";
import IFoundAPet from "./Components/ProtectedComponents/IFoundAPet";
import ILostAPet from "./Components/ProtectedComponents/ILostAPet";
import Adopt from "./Components/FreeComponents/AdoptMe";
import Logout from "./Components/ProtectedComponents/Logout";
import LostPetsPage from "./Components/ProtectedComponents/LostPetsPage";
import FoundPetsPage from "./Components/ProtectedComponents/FoundPetsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div>
      <Notification />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/lostpet" element={<ILostAPet />} />
          <Route path="/foundpet" element={<IFoundAPet />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/getLostPets" element={<LostPetsPage/>}/>
          <Route path="/getFoundPets" element={<FoundPetsPage/>}/>
          {/* {!token ? (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/adopt" element={<Adopt />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/lostpet" element={<ILostAPet />} />
              <Route path="/foundpet" element={<IFoundAPet />} />
              <Route path="/logout" element={<Logout />} />
            </>
          )} */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
