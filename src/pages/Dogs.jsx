import { useState } from 'react';
import ImageGrid from '../components/ImageGrid'; // Import the new ImageGrid component

const images = [
  'dogs/1-Hundehovedspring-Kell-Jarner.webp',
  'dogs/2-Fugleperspektiv-Kell-Jarner.webp',
  'dogs/3-Hånden-der-fordrer.webp',
  'dogs/4-Forpotestand-Kell-Jarner.webp',
  'dogs/5-Pønsehund-Kell-Jarner.webp',
  'dogs/6-Under-gulvbrædderne4-Kell-Jarner.webp',
  'dogs/7-Bid-ej-hånden-der-fodrer-dig-Kell-Jarner.webp',
  'dogs/8-Frygten-for-at-miste-Kell-Jarner.webp',
  'dogs/9-Hundeslagsmål-Kel-Jarner.webp',
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
        <h1 className="text-3xl font-bold mb-4">Dogs</h1>
        <p className="mb-8">This is the dogs page.</p>
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
