import { useState } from "react";
import PropTypes from "prop-types";
import { saveContactMessage } from "../utils/firestoreUtils"; // Importér Firestore-funktionen

const ContactFormModal = ({ isOpen, onClose, selectedImage }) => {
  const [formData, setFormData] = useState({
    email: "",
    messageType: "Jeg ønsker at høre mere om maleriet",
    comment: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Du skal acceptere privatlivspolitikken for at indsende formularen.");
      return;
    }

    try {
      // Gem besked i Firestore
      await saveContactMessage(
        formData.email,
        formData.messageType,
        formData.comment,
        selectedImage.title
      );
      alert("Besked sendt og gemt i databasen!");
      onClose();
    } catch (error) {
      console.error("Noget gik galt ved afsendelse af besked:", error);
      alert("Der opstod en fejl. Prøv igen senere.");
    }
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
          &times;
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
              <option>Jeg ønsker at høre mere om maleriet</option>
              <option>Jeg ønsker at se maleriet</option>
              <option>Jeg ønsker at købe maleriet</option>
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
          <label className="items-center mx-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mr-2"
            />
            Jeg accepterer, at mine oplysninger gemmes i overensstemmelse med{" "}
            <a
              href="/privacy-policy"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              privatlivspolitikken
            </a>
            .
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
