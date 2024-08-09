import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import Modal from '../components/Modal';  // Import the Modal component

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
        <h1 className="text-3xl font-bold mb-4">Dogs</h1>
        <p className="mb-8">This is the dogs page.</p>
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

export default Dogs;
