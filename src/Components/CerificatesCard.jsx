import React from "react";
import "./../Styles/CertificateCard.css";
import { Link } from "react-router-dom";

function CerificatesCard({ img, name, link }) {
  return (
    <div className="certificates-card-container">
      <div className="card-image">
        <Link to={link} target="_blank" rel="noreferrer">
          <img src={img} alt="certificate" />
        </Link>
      </div>
      <div className="card-desc">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default CerificatesCard;
