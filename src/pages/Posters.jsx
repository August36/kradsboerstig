import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import NavigationArrows from '../components/NavigationArrows';

const images = [
  {
    src: '/portraits/Frida-portræt-Kell-Jarner.webp',
    title: 'Frida Portræt',
    price: '800',
    size: '50x70 cm'
  },
  {
    src: '/portraits/Frida2-portræt-Kell-Jarner.webp',
    title: 'Frida2 Portræt',
    price: '850',
    size: '50x70 cm'
  },
  {
    src: '/portraits/Henrik-Bay-portræt-Kell-Jarner.webp',
    title: 'Henrik Bay',
    price: '900',
    size: '60x80 cm'
  },
  {
    src: '/portraits/Jesper-Binzer-DBPM-Kell-Jarner-scaled.webp',
    title: 'Jesper Binzer',
    price: '950',
    size: '70x100 cm'
  },
  {
    src: '/portraits/Lars-Løkke-portræt-Kell-Jarner.webp',
    title: 'Lars Løkke',
    price: '850',
    size: '50x70 cm'
  },
  {
    src: '/portraits/Mads-Mikkelsen-portræt-Kell-Jarner.webp',
    title: 'Mads Mikkelsen',
    price: '950',
    size: '60x80 cm'
  },
  {
    src: '/portraits/Mariann-Kell-Jarner-scaled.webp',
    title: 'Mariann',
    price: '800',
    size: '50x70 cm'
  },
  {
    src: '/portraits/Max-Manneche-portræt-Kell-Jarner.webp',
    title: 'Max Manneche',
    price: '900',
    size: '60x80 cm'
  },
  {
    src: '/portraits/Selvportræt-Kell-Jarner-scaled.webp',
    title: 'Selvportræt',
    price: '1000',
    size: '70x100 cm'
  },
  {
    src: '/portraits/selvportræt1-Kell-Jarner.webp',
    title: 'Selvportræt 1',
    price: '950',
    size: '60x80 cm'
  },
  {
    src: '/portraits/Sommer-og-Lars-portræt-Kell-Jarner.webp',
    title: 'Sommer og Lars',
    price: '850',
    size: '50x70 cm'
  },
  {
    src: '/portraits/Vinnie-Bjerre-portræt-Kell-jarner.webp',
    title: 'Vinnie Bjerre',
    price: '800',
    size: '50x70 cm'
  }
];

const Posters = () => {
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
        <h1 className="text-3xl font-bold mb-4">Posters</h1>
        <p className="mb-8">This is the posters page.</p>
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

export default Posters;
