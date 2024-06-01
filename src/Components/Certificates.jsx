import React from "react";
import "./../Styles/Certificates.css";

import CerificatesCard from "./CerificatesCard";
function Certificates() {
  const certificates = [
    {
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~89R3XXWXYG3S/CERTIFICATE_LANDING_PAGE~89R3XXWXYG3S.jpeg",
      name: "Programming with JavaScript",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~89R3XXWXYG3S/CERTIFICATE_LANDING_PAGE~89R3XXWXYG3S.jpeg",
    },
    {
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8T7T6BCYEXP5/CERTIFICATE_LANDING_PAGE~8T7T6BCYEXP5.jpeg",
      name: "Reac Basics",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8T7T6BCYEXP5/CERTIFICATE_LANDING_PAGE~8T7T6BCYEXP5.jpeg",
    },

    {
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HKVMEAPCQWB6/CERTIFICATE_LANDING_PAGE~HKVMEAPCQWB6.jpeg",
      name: "Advanced React",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HKVMEAPCQWB6/CERTIFICATE_LANDING_PAGE~HKVMEAPCQWB6.jpeg",
    },
    {
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UMGMP69JL4G4/CERTIFICATE_LANDING_PAGE~UMGMP69JL4G4.jpeg",
      name: "Version Control ",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UMGMP69JL4G4/CERTIFICATE_LANDING_PAGE~UMGMP69JL4G4.jpeg",
    },
    {
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GFW5GBCYD2D2/CERTIFICATE_LANDING_PAGE~GFW5GBCYD2D2.jpeg",
      name: "Introduction to front-end development",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GFW5GBCYD2D2/CERTIFICATE_LANDING_PAGE~GFW5GBCYD2D2.jpeg",
    },
    {
      img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7A6DDT46BZHP/CERTIFICATE_LANDING_PAGE~7A6DDT46BZHP.jpeg",
      name: "Introduction to Databases for Back-End Development",
      link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7A6DDT46BZHP/CERTIFICATE_LANDING_PAGE~7A6DDT46BZHP.jpeg",
    },
  ];
  return (
    <div className="license-and-certificates" id="certificates">
      <h1>Licence and Certifications.</h1>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <CerificatesCard
            key={index}
            img={certificate.img}
            name={certificate.name}
            link={certificate.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
