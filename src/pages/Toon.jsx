import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  '/toon/Den-blå-hund-og-menneskedyret-Kell-Jarner-2017.webp',
  '/toon/Dyrene-fra-Tramonti-Kell-Jarner-2016.webp',
  '/toon/Gudehunden-Kell-Jarner-2018.webp',
  '/toon/Hævnen-Kell-Jarner-2016.webp',
  '/toon/Ko-for-to-scaled.webp',
  '/toon/Lille-vredladen-hund.webp',
  '/toon/Old-innocent.webp',
  '/toon/Ørlingerne-2014-Kell-Jarner.webp',
  '/toon/Se-hvad-jeg-har-lavet-Kell-Jarner-2017.webp',
  '/toon/Tiger2-Kell-Jarner.webp',
  '/toon/Trolden-fra-Tramonti.webp',
  '/toon/Udåden-Kell-Jarner-2016.webp',
];

const Toon = () => {
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
        <h1 className="text-3xl font-bold mb-4">Toons</h1>
        <p className="mb-8">This is the toons page.</p>
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

export default Toon;
