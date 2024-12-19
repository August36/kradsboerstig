import PropTypes from "prop-types";
import ContactFormModal from "./ContactFormModal";
import { useState } from "react";
import emailIcon from "/letter-icon.png"; // Sti til dit ikon i public-mappen

const ImageGrid = ({ images, onImageClick }) => {
  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-12">
      {sortedImages.map((image) => (
        <div
          key={image.id}
          className="relative overflow-hidden bg-white pb-2 shadow-lg transform transition-all duration-300"
        >
          {/* Billed-container med hover-effekt */}
          <div
            className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 group cursor-pointer overflow-hidden"
            onClick={() =>
              onImageClick(sortedImages.findIndex((img) => img.id === image.id))
            }
          >
            <img
              src={image.imageURL || "fallback-image-url.png"}
              alt={image.title || "Billede"}
              className="object-cover w-full h-full absolute inset-0 transform transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover-overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="p-2 text-gray-300">Klik for at se</p>
            </div>
          </div>

          {/* Metadata og email-knap */}
          <div className="relative z-10 bg-white mt-6 text-center">
            <p className="text-xl font-semibold">{image.title || "Ingen titel"}</p>
            <p className="text-md text-gray-600">{image.size || "Ukendt størrelse"}</p>
            <p className="text-md text-gray-800">{image.price || "Pris ikke angivet"} DKK</p>

            {/* Email-knap med tooltip */}
            <button
              onClick={() => openModal(image)} // Åbner kontaktformular modal
              className="relative inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition cursor-pointer group"
              aria-label="Kontakt"
            >
              {/* Email-ikon */}
              <img
                src={emailIcon}
                alt="Kontakt"
                className="w-5 h-5 mt-1 transform transition-transform duration-300 hover:scale-110"
              />

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Kontakt vedrørende værket
              </div>
            </button>
          </div>
        </div>
      ))}

      {/* Kontaktformular Modal */}
      {modalOpen && (
        <ContactFormModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

// Definer PropTypes for komponenten
ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Sikrer unik nøgle
      imageURL: PropTypes.string.isRequired, // URL til billede
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired, // Krævet for korrekt sortering
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired, // Funktion til håndtering af klik
};

export default ImageGrid;
