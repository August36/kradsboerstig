import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/Plakater/thumbnail_1 Badman Plakat.jpg",
    title: "Badman",
    price: "225 DKK inklusiv ramme 425",
    size: "A2-format; 42x59,4 cm",
  },
  {
    src: "/Plakater/thumbnail_2 Drengene fra Tramonti Plakat.jpg",
    title: "Drengene fra Tramonti",
    price: "225 DKK - inklusiv ramme 425",
    size: "A2-format; 42x59,4 cm",
  },
  {
    src: "/Plakater/thumbnail_3 Hunde plakat.jpg",
    title: "Hunde",
    price: "225 DKK - inklusiv ramme 425",
    size: "A2-format; 42x59,4 cm",
  },
  {
    src: "/Plakater/thumbnail_4 Medusa plakat.jpg",
    title: "Medusa",
    price: "225 DKK - inklusiv ramme 425",
    size: "A2-format; 42x59,4 cm",
  },
  {
    src: "/Plakater/5-Vædder-Plakat.jpg",
    title: "Vædder",
    price: "225 DKK - inklusiv ramme 425",
    size: "A2-format; 42x59,4 cm",
  },
  {
    src: "/Plakater/6_Ain_&_Kabel_Plakat.jpg",
    title: "Ain & Kabel",
    price: "225 DKK - inklusiv ramme 425",
    size: "A2-format; 42x59,4 cm",
  },
];

const Plakater = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    setModalImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Plakater</h1>
        <p className="mb-2">
          Som et alternativ til mine originale malerier kan du købe en
          kunstplakat. Du kan købe dem med og uden ramme i Galleri Krasbørstig.
          Hvis du bestiller dem med posten, modtager du dem sammenrullet i et
          rør
        </p>
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

export default Plakater;
