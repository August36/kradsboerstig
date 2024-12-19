import { useState } from "react";
import PropTypes from "prop-types";

const ContactFormModal = ({ isOpen, onClose, selectedImage }) => {
  const [formData, setFormData] = useState({
    email: "",
    messageType: "Jeg ønsker at høre mere om maleriet",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data sendt:", {
      title: selectedImage.title,
      ...formData,
    });
    alert("Besked sendt!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Luk modal ved klik uden for containeren
    >
      <div
        className="bg-white p-8 rounded shadow-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()} // Stop klik inden for modal-container
      >
        {/* Luk-knap i øverste højre hjørne */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition text-2xl"
          aria-label="Luk modal"
        >
          &times; {/* Kryds som luk-knap */}
        </button>

        <h2 className="text-2xl mb-4 font-semibold">
          Kontakt vedrørende &quot;{selectedImage.title}&quot;
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            Din Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              required
            />
          </label>
          <label>
            Hvad ønsker du?:
            <select
              name="messageType"
              value={formData.messageType}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option>At høre mere om maleriet</option>
              <option>At se maleriet</option>
              <option>At købe maleriet</option>
            </select>
          </label>
          <label>
            Kommentar:
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows="4"
              className="w-full border p-2 rounded mt-1"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

ContactFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedImage: PropTypes.object.isRequired,
};

export default ContactFormModal;
