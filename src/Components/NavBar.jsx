import React from "react";
import "./../Styles/NavBar.css";
import Github from "./../Images/github.png";
import Instagram from "./../Images/instagram.png";
import Linkedin from "./../Images/linkedin.png";
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
          <img className="github-icon" src={Github} alt="" />
        </Link>
        <Link>
          <img src={Instagram} alt="" />
        </Link>
        <Link>
          <img src={Linkedin} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
