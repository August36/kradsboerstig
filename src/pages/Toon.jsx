import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  {
    src: '/toon/Den-blå-hund-og-menneskedyret-Kell-Jarner-2017.webp',
    title: 'Den Blå Hund og Menneskedyret',
    price: '900',
    size: '70x90 cm'
  },
  {
    src: '/toon/Dyrene-fra-Tramonti-Kell-Jarner-2016.webp',
    title: 'Dyrene fra Tramonti',
    price: '850',
    size: '60x80 cm'
  },
  {
    src: '/toon/Gudehunden-Kell-Jarner-2018.webp',
    title: 'Gudehunden',
    price: '950',
    size: '80x100 cm'
  },
  {
    src: '/toon/Hævnen-Kell-Jarner-2016.webp',
    title: 'Hævnen',
    price: '880',
    size: '75x95 cm'
  },
  {
    src: '/toon/Ko-for-to-scaled.webp',
    title: 'Ko for To',
    price: '920',
    size: '85x105 cm'
  },
  {
    src: '/toon/Lille-vredladen-hund.webp',
    title: 'Lille Vredladen Hund',
    price: '870',
    size: '70x90 cm'
  },
  {
    src: '/toon/Old-innocent.webp',
    title: 'Old Innocent',
    price: '860',
    size: '65x85 cm'
  },
  {
    src: '/toon/Ørlingerne-2014-Kell-Jarner.webp',
    title: 'Ørlingerne',
    price: '900',
    size: '80x100 cm'
  },
  {
    src: '/toon/Se-hvad-jeg-har-lavet-Kell-Jarner-2017.webp',
    title: 'Se Hvad Jeg Har Lavet',
    price: '910',
    size: '75x95 cm'
  },
  {
    src: '/toon/Tiger2-Kell-Jarner.webp',
    title: 'Tiger 2',
    price: '930',
    size: '80x100 cm'
  },
  {
    src: '/toon/Trolden-fra-Tramonti.webp',
    title: 'Trolden fra Tramonti',
    price: '880',
    size: '70x90 cm'
  },
  {
    src: '/toon/Udåden-Kell-Jarner-2016.webp',
    title: 'Udåden',
    price: '850',
    size: '60x80 cm'
  }
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
            <div className="relative">
              <img
                src={images[modalImageIndex].src}  // Brug 'src' fra objektet
                alt={images[modalImageIndex].title}  // Brug 'title' fra objektet
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()} // Forhindre lukning af modal ved klik på billedet
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-semibold">{images[modalImageIndex].title}</h2>
                <p>Price: {images[modalImageIndex].price}</p>
                <p>Size: {images[modalImageIndex].size}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Toon;
