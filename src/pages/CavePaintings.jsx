import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import Modal from '../components/Modal';  // Import the Modal component

const images = [
  {
    src: '/cave-paintings/Den-skamfødte-Kell-Jarner.webp',
    title: 'Den skamfødte',
    price: '699',
    size: '60x80 cm'
  },
  {
    src: '/cave-paintings/Ekstase-solgt-Kell-Jarner.webp',
    title: 'Ekstase',
    price: '749',
    size: '60x80 cm'
  },
  {
    src: '/cave-paintings/Hjortes-hjerner-Kell-Jarner.webp',
    title: 'Hjortes hjerner',
    price: '599',
    size: '50x70 cm'
  },
  {
    src: '/cave-paintings/Kampen-på-ord-om-en-svævende-kvinde-Kell-Jarner.webp',
    title: 'Kampen på ord om en svævende kvinde',
    price: '899',
    size: '70x100 cm'
  },
  {
    src: '/cave-paintings/Mandesnak-Kell-Jarner.webp',
    title: 'Mandesnak',
    price: '499',
    size: '40x60 cm'
  },
  {
    src: '/cave-paintings/Skabelsen-af-en-pandababy-Kell-Jarner.webp',
    title: 'Skabelsen af en pandababy',
    price: '649',
    size: '50x70 cm'
  },
  {
    src: '/cave-paintings/The-Trump-afterparty-Kell-Jarner.webp',
    title: 'The Trump afterparty',
    price: '799',
    size: '60x80 cm'
  },
  {
    src: '/cave-paintings/Uskyld-Kell-Jarner.webp',
    title: 'Uskyld',
    price: '749',
    size: '60x80 cm'
  },
  {
    src: '/cave-paintings/Varslet-Kell-Jarner.webp',
    title: 'Varslet',
    price: '699',
    size: '60x80 cm'
  }
];

const CavePaintings = () => {
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
        <h1 className="text-3xl font-bold mb-4">Cave Paintings</h1>
        <p className="mb-8">This is the cave paintings page.</p>
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

export default CavePaintings;
