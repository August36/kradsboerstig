import PropTypes from 'prop-types';

const Modal = ({ isOpen, images, modalImageIndex, onClose, onPrev, onNext }) => {
  if (!isOpen || modalImageIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]" // Increased z-index to ensure it is always on top
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Content Wrapper */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none z-[10001]"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
        >
          &larr;
        </button>

        {/* Image with Close Button */}
        <div className="relative flex justify-center items-center z-[10000]">
          <h2 id="modal-title" className="sr-only">
            Image Viewer
          </h2>
          <img
            src={images[modalImageIndex].src}
            alt={images[modalImageIndex].title}
            className="max-w-full max-h-full object-contain xs:max-w-[90vw] xs:max-h-[90vh] sm:max-w-[80vw] sm:max-h-[80vh] md:max-w-[70vw] md:max-h-[70vh] lg:max-w-[60vw] lg:max-h-[60vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image
          />
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none z-[10001]"
            onClick={onClose}
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none z-[10001]"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
        >
          &rarr;
        </button>
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
