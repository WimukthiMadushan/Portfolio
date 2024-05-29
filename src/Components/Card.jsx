import React from "react";
import "./../Styles/Card.css";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
function Card({ title, description, link }) {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-title">{title}</h1>
        <Link className="card-link" to={link}>
          <FaExternalLinkAlt />
        </Link>
      </div>
      <h2 className="card-description">{description}</h2>
    </div>
  );
}

export default Card;
