import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  return (
    // <div>
    //   <nav>
    //     <ul>
    //       <Link to="/register">Register</Link>
    //       <Link to="/login">Login</Link>
    //       <Link to="/">Homepage</Link>
    //       <Link to="/foundpet">I found a pet</Link>
    //       <Link to="/lostpet">I lost a pet</Link>
    //       <Link to="/logout">Logout</Link>
    //     </ul>
    //   </nav>
    // </div>
    <>
      {token ? (
        <div>
          <nav>
            <ul>
              <Link to="/">Homepage</Link>
              <Link to="/foundpet">I found a pet</Link>
              <Link to="/lostpet">I lost a pet</Link>
              <Link to="/logout">Logout</Link>
              <Link to="/getLostPets">Here are some lost pets!</Link>
              <Link to="/getFoundPets">Here are some found pets!</Link>
            </ul>
          </nav>
        </div>
      ) : (
        <nav>
          <ul>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Homepage</Link>
            <Link to="/adopt">Adopt a pet!</Link>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
