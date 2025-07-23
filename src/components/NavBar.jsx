import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/proposals">Proposals</Link>
      </div>
      <button onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : " Dark Mode"}
      </button>
    </nav>
  );
}

export default NavBar;
