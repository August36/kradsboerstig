import { useState } from 'react';
import ImageGrid from '../components/ImageGrid'; // Import the new ImageGrid component
import Breadcrumbs from '../components/Breadcrumbs';

const images = [
  'realistic/Den-blå-hund-Kell-Jarner.webp',
  'realistic/Drengene-fra-Tremonti-Kell-Jarner.webp',
  'realistic/Fisk-Kell-Jarner.webp',
  'realistic/Vandbøffel-Kell-Jarner.webp',
  'realistic/Victory-med-åbne-øjne-Kell-Jarner.webp',
];

const Faces = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (src) => {
    setModalImage(src);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">Realistic</h1>
        <p className="mb-8">This is the realistic page.</p>
        <ImageGrid images={images} onImageClick={handleOpenModal} />

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <img
              src={modalImage}
              alt="Modal"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking on the image
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Faces;
