import React from "react";
import "./../Styles/NavBar.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">W.G.W.M Bandara.</h1>
      <div className="navbar-icons">
        <Link
          to={"https://github.com/WimukthiMadushan"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} />
        </Link>

        <Link
          to={
            "https://www.linkedin.com/in/wimukthi-madushan-bandara-22a375267/"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
