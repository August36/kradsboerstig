import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

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
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">Cave Paintings</h1>
        <p className="mb-8">This is the cave paintings page.</p>
        <ImageGrid images={images} onImageClick={handleOpenModal} />

        {/* Modal */}
        {modalImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <NavigationArrows 
              currentIndex={modalImageIndex}
              totalImages={images.length}
              setModalImageIndex={setModalImageIndex}
            />
            <img
              src={images[modalImageIndex]}
              alt={`Modal ${modalImageIndex + 1}`}
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
