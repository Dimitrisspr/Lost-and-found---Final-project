import Notification from "./Components/Notification";
import "./Firebase";
import Register from "./Components/FreeComponents/Register"
import Login from "./Components/FreeComponents/Login";

function App() {
  return <div className="App">
    <Login />
    <Register />
    <Notification />
  </div>;
}

export default App;
