import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  '/morbid/Dansen-om-guldkalven-Kell-Jarner.webp',
  '/morbid/Helikopteren-ankommer-efter-middag-Kell-Jarner.webp',
  '/morbid/Herobar-3.24-Kell-Jarner.webp',
  '/morbid/Hullet-Kell-Jarner.webp',
  '/morbid/Kamp-kat-og-klovne.webp',
  '/morbid/Mord-i-Muxia-Kell-Jarner.webp',
  '/morbid/Olfert-Kell-Jarner.webp',
  '/morbid/Selvportræt-med-snublende-hunde-Kell-Jarner.webp',
  '/morbid/Syndesvinehund-Kell-Jarner.webp',
];

const Morbid = () => {
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
        <h1 className="text-3xl font-bold mb-4">Morbid</h1>
        <p className="mb-8">This is the Morbid page.</p>
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

export default Morbid;
