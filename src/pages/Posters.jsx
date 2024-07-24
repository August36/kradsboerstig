import { useState } from 'react';
import ImageGrid from '../components/ImageGrid'; // Import the new ImageGrid component

const images = [
  'art-brut/Boudoir-Kell-Jarner-2017.webp',
  'art-brut/Danse-macabre-Kell-Jarner-2017.webp',
  'art-brut/Frelser-scaled.webp',
  'art-brut/Fugl-og-fæ-Kell-Jarner-2019.webp',
  'art-brut/Grumme-gerninger-pænt-tøj-Kell-Jarner-2018-1.webp',
  'art-brut/Håndværkere-Kell-Jarner-2018.webp',
  'art-brut/Kafisos-og-Liriope-Kell-Jarner-2018.webp',
  'art-brut/Kongen-og-kravlenisserne-Kell-Jarner-2019.webp',
  'art-brut/Partybussen-og-bykongen-Kell-Jarner-2018.webp',
  'art-brut/Profeten-Kell-Jarner-2017.webp',
  'art-brut/Skytsengel.-Kell-Jarner-2018.webp',
  'art-brut/Smugkig-Kell-Jarner-2017.webp',
  'art-brut/Sommer-og-Lars-Kell-Jarner-2018.webp',
];

const Faces = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (src) => {
    setModalImage(src);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Posters</h1>
        <p className="mb-8">This is the poster page</p>
        <ImageGrid images={images} onImageClick={handleOpenModal} />

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <img
              src={modalImage}
              alt="Modal"
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
