import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import Modal from '../components/Modal';  // Import the Modal component

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

const Portraits = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">Portraits</h1>
        <p className="mb-8">This is the portraits page.</p>
        <ImageGrid images={images} onImageClick={handleOpenModal} />

        {/* Modal Component */}
        <Modal
          isOpen={modalImageIndex !== null}
          images={images}
          modalImageIndex={modalImageIndex}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      </div>
    </>
  );
};

export default Portraits;
