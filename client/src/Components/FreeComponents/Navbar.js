import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/" >Homepage</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
