import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  {
    src: 'faces/Ansigt3-Nar-Kell-Jarner-2017.webp',
    title: 'Ansigt 3 - Nar',
    price: '599',
    size: '50x70 cm'
  },
  {
    src: 'faces/Ansigt4-Fingerdukke-Kell-Jarner-2017.webp',
    title: 'Ansigt 4 - Fingerdukke',
    price: '649',
    size: '60x80 cm'
  },
  {
    src: 'faces/Ansigt5-Kell-Jarner-2017-Løber.webp',
    title: 'Ansigt 5 - Løber',
    price: '699',
    size: '60x80 cm'
  },
  {
    src: 'faces/Ansigt6-Fremmed-2017.webp',
    title: 'Ansigt 6 - Fremmed',
    price: '599',
    size: '50x70 cm'
  },
  {
    src: 'faces/Ansigt7-Stenmand-små-venner-Kell-Jarner-2017.webp',
    title: 'Ansigt 7 - Stenmand og små venner',
    price: '749',
    size: '70x100 cm'
  },
  {
    src: 'faces/Ansigt8-Menneske-i-lag-Kell-Jarner-2017.webp',
    title: 'Ansigt 8 - Menneske i lag',
    price: '799',
    size: '70x100 cm'
  },
  {
    src: 'faces/Ansigt9-Hvorformenneske-Kell-Jarner-2017.webp',
    title: 'Ansigt 9 - Hvorformenneske',
    price: '699',
    size: '60x80 cm'
  },
  {
    src: 'faces/MG_0161.webp',
    title: 'MG 0161',
    price: '649',
    size: '60x80 cm'
  },
  {
    src: 'faces/MG_0162.webp',
    title: 'MG 0162',
    price: '649',
    size: '60x80 cm'
  }
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
              src={images[modalImageIndex].src}  // Brug 'src' fra objektet
              alt={images[modalImageIndex].title}  // Brug 'title' fra objektet
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()} // Forhindre lukning af modal ved klik på billedet
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Faces;
