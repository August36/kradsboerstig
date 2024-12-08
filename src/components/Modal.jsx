import PropTypes from "prop-types";
import { useEffect } from "react";

const Modal = ({ isOpen, images, modalImageIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || modalImageIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
      onClick={onClose} // Click on the background closes the modal
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative flex items-center justify-center group"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        {/* Container for image and buttons */}
        <div className="relative max-w-[90vw] max-h-[90vh] w-[800px] h-[600px] bg-black flex items-center justify-center rounded-lg">
          <h2 id="modal-title" className="sr-only">
            Image Viewer
          </h2>

          {/* Left button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white border border-white rounded-full p-3 focus:outline-none shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-[10001]"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image */}
          <img
            src={images[modalImageIndex].src}
            alt={images[modalImageIndex].title}
            className="w-full h-full object-contain rounded-lg"
          />

          {/* Right button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white border border-white rounded-full p-3 focus:outline-none shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-[10001]"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Close button */}
          <button
            className="absolute top-4 right-4 bg-black text-white border border-white rounded-full p-3 focus:outline-none shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-[10001]"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>

          {/* Left hover zone */}
          <div className="absolute left-0 top-0 h-full w-[20%] z-[10000] group-hover:cursor-pointer" />

          {/* Right hover zone */}
          <div className="absolute right-0 top-0 h-full w-[20%] z-[10000] group-hover:cursor-pointer" />

          {/* Top hover zone */}
          <div className="absolute top-0 left-0 h-[20%] w-full z-[10000] group-hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  modalImageIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Modal;
