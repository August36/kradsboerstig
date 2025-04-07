import PropTypes from "prop-types";

const ContactFormModal = ({ isOpen, onClose, selectedImage }) => {
  if (!isOpen) return null;

  const mailtoLink = `mailto:kjarner@me.com?subject=${encodeURIComponent(
    `Angående: ${selectedImage.title}`
  )}`;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded shadow-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
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

        <p className="mb-6">
          Hvis du er interesseret i at høre mere om maleriet, så send mig en e-mail via knappen herunder.
        </p>

        <a
          href={mailtoLink}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition text-center block"
          onClick={onClose}
        >
          Åbn mailklient
        </a>
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
