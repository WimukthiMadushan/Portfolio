import { useState } from "react";

function ContactMe() {
  const [status, setStatus] = useState("");
  const email = "wimukthi.21@cse.mrt.ac.lk"; // Replace with your email address

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setStatus("Email address copied to clipboard!");
        setTimeout(() => setStatus(""), 2000); // Hide the popup after 2 seconds
      },
      (err) => {
        console.error("Failed to copy email address:", err);
        setStatus("Failed to copy email address. Please try again.");
        setTimeout(() => setStatus(""), 2000); // Hide the popup after 2 seconds
      }
    );
  };

  return (
    <section
      id="contact-me"
      className="w-full max-w-2xl mx-auto py-12 md:py-16 lg:py-20 relative"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
        <p className="text-gray-600 mt-2">
          Click the button below to copy my email address.
        </p>
        <button
          onClick={handleCopy}
          className="mt-6 px-6 py-3 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none transition duration-300 ease-in-out animate-pulse"
        >
          Copy Email Address
        </button>
        {status && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 1000 }}
          >
            <div
              className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg"
              style={{ width: "fit-content" }}
            >
              <p className="text-center text-green-600">{status}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactMe;
