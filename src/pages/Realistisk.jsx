import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "Realistisk/Hane1.jpg",
    title: "Hane",
    price: "3.600",
    size: "21x29,7 cm, Akryl på papir",
  },
  {
    src: "Realistisk/æbler_og_banan.jpg",
    title: "Æbler og banan",
    price: "5.200",
    size: "Akryl på lærred 32x26 cm",
  },
  {
    src: "Realistisk/Vandbøffel-Kell-Jarner.webp",
    title: "Vandbøffel",
    price: "18.000",
    size: "Akryl på lærred 120x150 cm",
  },
  {
    src: "Realistisk/Black marlin.jpeg",
    title: "Black marlin",
    price: "8.000",
    size: "Akryl på lærred 40x100 cm",
  },
  {
    src: "Realistisk/Mariann van Eick.jpeg",
    title: "Mariann van Eick",
    price: "6.000",
    size: "Akryl på lærred 32x48 cm",
  },
  {
    src: "Realistisk/Vædder.jpeg",
    title: "Vædder",
    price: "Akryl på lærred 20x20 cm",
    size: "3.400",
  },
  {
    src: "Realistisk/Verdens oprindelse (opdateret).jpeg",
    title: "Verdens oprindelse",
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
