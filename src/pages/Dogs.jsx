import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  {
    src: '/dogs/1-Hundehovedspring-Kell-Jarner.webp',
    title: 'Hundehovedspring',
    price: '599',
    size: '50x70 cm'
  },
  {
    src: '/dogs/2-Fugleperspektiv-Kell-Jarner.webp',
    title: 'Fugleperspektiv',
    price: '499',
    size: '40x60 cm'
  },
  {
    src: '/dogs/3-Hånden-der-fordrer.webp',
    title: 'Hånden der fordrer',
    price: '699',
    size: '60x80 cm'
  },
  {
    src: '/dogs/4-Forpotestand-Kell-Jarner.webp',
    title: 'Forpotestand',
    price: '549',
    size: '50x70 cm'
  },
  {
    src: '/dogs/5-Pønsehund-Kell-Jarner.webp',
    title: 'Pønsehund',
    price: '499',
    size: '40x60 cm'
  },
  {
    src: '/dogs/6-Under-gulvbrædderne4-Kell-Jarner.webp',
    title: 'Under gulvbrædderne',
    price: '799',
    size: '70x100 cm'
  },
  {
    src: '/dogs/7-Bid-ej-hånden-der-fodrer-dig-Kell-Jarner.webp',
    title: 'Bid ej hånden der fodrer dig',
    price: '599',
    size: '50x70 cm'
  },
  {
    src: '/dogs/8-Frygten-for-at-miste-Kell-Jarner.webp',
    title: 'Frygten for at miste',
    price: '749',
    size: '60x80 cm'
  },
  {
    src: '/dogs/9-Hundeslagsmål-Kel-Jarner.webp',
    title: 'Hundeslagsmål',
    price: '899',
    size: '70x100 cm'
  }
];

const Dogs = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleOpenModal = (index) => {
    console.log('Opening modal with index:', index);
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    console.log('Closing modal');
    setModalImageIndex(null);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">Dogs</h1>
        <p className="mb-8">This is the dogs page.</p>
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

export default Dogs;
