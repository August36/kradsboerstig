import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

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
        <h1 className="text-3xl font-bold mb-4">Faces</h1>
        <p className="mb-8">This is the faces page.</p>
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

export default Faces;
