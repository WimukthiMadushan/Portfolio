import React, { useState } from "react";
import emailjs from "emailjs-com";
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
    console.log(formData);

    /*emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID" // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("FAILED");
        }
      );*/
  };

  return (
    <div className="contact-form">
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
