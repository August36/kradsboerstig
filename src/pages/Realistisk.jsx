import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "Realistisk/Hane1.jpg",
    title: "Hane",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "Realistisk/æbler_og_banan.jpg",
    title: "Æbler og banan",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "Realistisk/Vandbøffel-Kell-Jarner.webp",
    title: "Vandbøffel",
    price: "Spørg efter pris",
    size: "-",
  },
];

const Realistisk = () => {
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
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">Realistisk</h1>
        <p className="mb-8">
          Det hænder, at jeg sætter jeg mig ned og maler efter fotografier, som
          jeg selv har taget eller finder på nettet. Det er hvad det er, og dog
          kan det af og til være lidt mere end det umiddelbart ser ud til. Et
          lille twist, fx et skjult motiv eller en farve, der ikke var på
          fotografiet.
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

export default Realistisk;
