import { useState } from 'react';
import ImageGrid from '../components/ImageGrid'; // Import the new ImageGrid component
import Breadcrumbs from '../components/Breadcrumbs';

const images = [
  'morbid/Dansen-om-guldkalven-Kell-Jarner.webp',
  'morbid/Helikopteren-ankommer-efter-middag-Kell-Jarner.webp',
  'morbid/Herobar-3.24-Kell-Jarner.webp',
  'morbid/Hullet-Kell-Jarner.webp',
  'morbid/Kamp-kat-og-klovne.webp',
  'morbid/Mord-i-Muxia-Kell-Jarner.webp',
  'morbid/Olfert-Kell-Jarner.webp',
  'morbid/Selvportræt-med-snublende-hunde-Kell-Jarner.webp',
  'morbid/Syndesvinehund-Kell-Jarner.webp',
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
        <h1 className="text-3xl font-bold mb-4">Morbid</h1>
        <p className="mb-8">This is the morbid page.</p>
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
