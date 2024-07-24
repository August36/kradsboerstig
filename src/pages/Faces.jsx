import { useState } from 'react';
import ImageGrid from '../components/ImageGrid'; // Import the new ImageGrid component
import Breadcrumbs from '../components/Breadcrumbs';

const images = [
  'faces/Ansigt3-Nar-Kell-Jarner-2017.webp',
  'faces/Ansigt4-Fingerdukke-Kell-Jarner-2017.webp',
  'faces/Ansigt5-Kell-Jarner-2017-Løber.webp',
  'faces/Ansigt6-Fremmed-2017.webp',
  'faces/Ansigt7-Stenmand-små-venner-Kell-Jarner-2017.webp',
  'faces/Ansigt8-Menneske-i-lag-Kell-Jarner-2017.webp',
  'faces/Ansigt9-Hvorformenneske-Kell-Jarner-2017.webp',
  'faces/MG_0161.webp',
  'faces/MG_0162.webp',
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
        <h1 className="text-3xl font-bold mb-4">Portraits</h1>
        <p className="mb-8">This is the faces page.</p>
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
