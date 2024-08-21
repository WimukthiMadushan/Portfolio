import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = (data: any) => {
    emailjs
      .send(
        "service_ebtbpxg", // Replace with your EmailJS service ID
        "template_reit869", // Replace with your EmailJS template ID
        data,
        "pESmZE4dQKifLogo6" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Email sent successfully!");
          reset();
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact-me"
      className="w-full max-w-2xl mx-auto py-12 md:py-16 lg:py-20"
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            Have a question or want to work together? Fill out the form below
            and I'll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              placeholder="Write your message here..."
              className={`w-full px-4 py-2 border rounded-md focus:outline-none min-h-[120px] ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">Message is required</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Submit
          </button>
          {status && (
            <p className="text-center text-green-600 mt-4">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
