import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setModalMessage("Please fill in all fields.");
      setModalType("error");
      setModalIsOpen(true);
      return;
    }

    try {
      setSending(true);

      const res = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (res.ok) {
        setModalMessage(json.message || "Message sent successfully!");
        setModalType("success");
        setModalIsOpen(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setModalMessage(
          json.message || "An error occurred, please try again later."
        );
        setModalType("error");
        setModalIsOpen(true);
      }
    } catch (err) {
      console.error(err);
      setModalMessage("Could not send message. Is the mail server running?");
      setModalType("error");
      setModalIsOpen(true);
    } finally {
      setSending(false);
    }
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <section id="contact-me" className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="flex">
            <div className="bg-white rounded-2xl p-8 shadow-md w-full flex flex-col justify-between min-h-[340px]">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Let's work together
                </h2>
                <p className="text-gray-600 mb-6">
                  Have a question or a project? Send a concise message and I'll
                  respond promptly.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-semibold">
                    @
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900 font-medium">
                      your.email@example.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="text-gray-900 font-medium">
                      Your City, Country
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                I typically reply within 24-48 hours. Thank you for reaching
                out.
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="flex">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 shadow-md w-full min-h-[340px] flex flex-col"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm text-gray-600 mb-1">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12 w-full px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/10"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm text-gray-600 mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="h-12 w-full px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black/10"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 flex-1">
                <label htmlFor="message" className="text-sm text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg min-h-[160px] focus:ring-2 focus:ring-black/10 resize-none"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  I respect your privacy — your email won't be shared.
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 disabled:opacity-60 transition-colors duration-200"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div
          className={`p-6 rounded-lg shadow-lg text-center max-w-md mx-auto ${
            modalType === "success" ? "bg-white" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">
            {modalType === "success" ? "Success!" : "Error"}
          </h2>
          <p className="mb-4 text-gray-700">{modalMessage}</p>
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
