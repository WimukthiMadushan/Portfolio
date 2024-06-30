import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../Styles/ContactMe.css";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ebtbpxg", // Replace with your EmailJS service ID
        "template_reit869", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "7e650nvod00hquts4"
      )
      .then(
        (response) => {
          //console.log("SUCCESS!", response.status, response.text);
          setStatus("SUCCESS");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          toast.success("Succesfull!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("FAILED");
          toast.error("Failed!!");
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <h2 className="form-title">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />
        </div>
        <div className="button-container">
          <button type="submit">Send</button>
          <ToastContainer />
        </div>
      </form>
      {status === "SUCCESS" && (
        <p className="message">Message sent successfully!</p>
      )}
      {status === "FAILED" && (
        <p className="message">Failed to send the message. Please try again.</p>
      )}
    </div>
  );
}

export default ContactMe;
