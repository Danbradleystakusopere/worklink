import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">WorkLink</h2>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Proposals</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
