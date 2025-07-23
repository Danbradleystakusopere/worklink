import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/">Jobs</Link>
      <Link to="/proposals">Proposals</Link>
    </nav>
  );
}

export default NavBar;
