import React from 'react';

const Modal = ({ isOpen, images, modalImageIndex, onClose, onPrev, onNext }) => {
  if (!isOpen || modalImageIndex === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Left Arrow */}
        <button
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          &larr;
        </button>

        {/* Image with Close Button */}
        <div className="relative flex justify-center items-center">
          <img
            src={images[modalImageIndex].src}
            alt={images[modalImageIndex].title}
            className="max-w-full max-h-full object-contain xs:max-w-[90vw] xs:max-h-[90vh] sm:max-w-[80vw] sm:max-h-[80vh] md:max-w-[70vw] md:max-h-[70vh] lg:max-w-[60vw] lg:max-h-[60vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image
          />
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Modal;
