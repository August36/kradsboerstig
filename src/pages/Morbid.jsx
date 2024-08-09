import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  {
    src: '/morbid/Dansen-om-guldkalven-Kell-Jarner.webp',
    title: 'Dansen om Guldkalven',
    price: '699',
    size: '70x100 cm'
  },
  {
    src: '/morbid/Helikopteren-ankommer-efter-middag-Kell-Jarner.webp',
    title: 'Helikopteren Ankommer Efter Middag',
    price: '749',
    size: '70x100 cm'
  },
  {
    src: '/morbid/Herobar-3.24-Kell-Jarner.webp',
    title: 'Herobar 3.24',
    price: '699',
    size: '60x80 cm'
  },
  {
    src: '/morbid/Hullet-Kell-Jarner.webp',
    title: 'Hullet',
    price: '599',
    size: '50x70 cm'
  },
  {
    src: '/morbid/Kamp-kat-og-klovne.webp',
    title: 'Kamp Kat og Klovne',
    price: '799',
    size: '70x100 cm'
  },
  {
    src: '/morbid/Mord-i-Muxia-Kell-Jarner.webp',
    title: 'Mord i Muxia',
    price: '649',
    size: '60x80 cm'
  },
  {
    src: '/morbid/Olfert-Kell-Jarner.webp',
    title: 'Olfert',
    price: '599',
    size: '50x70 cm'
  },
  {
    src: '/morbid/Selvportræt-med-snublende-hunde-Kell-Jarner.webp',
    title: 'Selvportræt med Snublende Hunde',
    price: '749',
    size: '70x100 cm'
  },
  {
    src: '/morbid/Syndesvinehund-Kell-Jarner.webp',
    title: 'Syndesvinehund',
    price: '699',
    size: '60x80 cm'
  }
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

export default Morbid;
