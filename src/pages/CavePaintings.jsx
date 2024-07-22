import { useState } from 'react';
import ImageGrid from '../components/ImageGrid'; // Import the new ImageGrid component

const images = [
  '/cave-paintings/Den-skamfødte-Kell-Jarner.webp',
  '/cave-paintings/Ekstase-solgt-Kell-Jarner.webp',
  '/cave-paintings/Hjortes-hjerner-Kell-Jarner.webp',
  '/cave-paintings/Kampen-på-ord-om-en-svævende-kvinde-Kell-Jarner.webp',
  '/cave-paintings/Mandesnak-Kell-Jarner.webp',
  '/cave-paintings/Skabelsen-af-en-pandababy-Kell-Jarner.webp',
  '/cave-paintings/The-Trump-afterparty-Kell-Jarner.webp',
  '/cave-paintings/Uskyld-Kell-Jarner.webp',
  '/cave-paintings/Varslet-Kell-Jarner.webp',
];

const CavePaintings = () => {
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
        <h1 className="text-3xl font-bold mb-4">Cave paintings</h1>
        <p className="mb-8">This is the cave paintings.</p>
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

export default CavePaintings;
