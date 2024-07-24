import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  '/portraits/Frida-portræt-Kell-Jarner.webp',
  '/portraits/Frida2-portræt-Kell-Jarner.webp',
  '/portraits/Henrik-Bay-portræt-Kell-Jarner.webp',
  '/portraits/Jesper-Binzer-DBPM-Kell-Jarner-scaled.webp',
  '/portraits/Lars-Løkke-portræt-Kell-Jarner.webp',
  '/portraits/Mads-Mikkelsen-portræt-Kell-Jarner.webp',
  '/portraits/Mariann-Kell-Jarner-scaled.webp',
  '/portraits/Max-Manneche-portræt-Kell-Jarner.webp',
  '/portraits/Selvportræt-Kell-Jarner-scaled.webp',
  '/portraits/selvportræt1-Kell-Jarner.webp',
  '/portraits/Sommer-og-Lars-portræt-Kell-Jarner.webp',
  '/portraits/Vinnie-Bjerre-portræt-Kell-jarner.webp',
];

const Portraits = () => {
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
        <h1 className="text-3xl font-bold mb-4">Portraits</h1>
        <p className="mb-8">This is the portraits page.</p>
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

export default Portraits;
