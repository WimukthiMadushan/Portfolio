import { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ensure this is set for accessibility

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage("Please fill in all fields.");
      setModalType("error");
      setModalIsOpen(true);
      return;
    }

    emailjs
      .send(
        "service_sqt4kcj",
        "template_28xj67l",
        formData,
        "yLLwtxG8HW1GWPGE6"
      )
      .then(() => {
        setModalMessage("Message sent successfully!");
        setModalType("success");
        setModalIsOpen(true);
      })
      .catch(() => {
        setModalMessage("An error occurred, please try again later.");
        setModalType("error");
        setModalIsOpen(true);
      });

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="contact-me" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Me
            </h2>
            <p className="text-gray-600 text-lg">
              Have a question or want to work together? Fill out the form below
              <b> with your name and your email address</b> and I'll get back to
              you as soon as possible.
            </p>
          </div>
          <form
            className="bg-white shadow-lg rounded-lg p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Your Email Address.
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out min-h-[150px]"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 font-semibold text-white bg-black hover:bg-gray-800 rounded-lg transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div
          className={`p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto ${
            modalType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">
            {modalType === "success" ? "Success!" : "Error"}
          </h2>
          <p className="mb-4">{modalMessage}</p>
          <button
            onClick={closeModal}
            className="px-4 py-2 font-medium text-white bg-black hover:bg-gray-800 rounded-md"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}

export default ContactMe;
