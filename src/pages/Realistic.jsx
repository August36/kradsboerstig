import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  {
    src: 'realistic/Den-blå-hund-Kell-Jarner.webp',
    title: 'Den Blå Hund',
    price: '1200',
    size: '80x100 cm'
  },
  {
    src: 'realistic/Drengene-fra-Tremonti-Kell-Jarner.webp',
    title: 'Drengene fra Tremonti',
    price: '1100',
    size: '70x90 cm'
  },
  {
    src: 'realistic/Fisk-Kell-Jarner.webp',
    title: 'Fisk',
    price: '1000',
    size: '60x80 cm'
  },
  {
    src: 'realistic/Vandbøffel-Kell-Jarner.webp',
    title: 'Vandbøffel',
    price: '1300',
    size: '90x120 cm'
  },
  {
    src: 'realistic/Victory-med-åbne-øjne-Kell-Jarner.webp',
    title: 'Victory med Åbne Øjne',
    price: '1250',
    size: '80x100 cm'
  }
];

const Realistic = () => {
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
        <h1 className="text-3xl font-bold mb-4">Realistic</h1>
        <p className="mb-8">This is the Realistic page.</p>
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

export default Realistic;
