import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/posters/thumbnail_1 Badman Plakat.jpg",
    title: "Badman",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/posters/thumbnail_2 Drengene fra Tramonti Plakat.jpg",
    title: "Drengene fra Tramonti",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/posters/thumbnail_3 Hunde plakat.jpg",
    title: "Hunde",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/posters/thumbnail_4 Medusa plakat.jpg",
    title: "Medusa",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/posters/5-Vædder-Plakat.jpg",
    title: "Vædder",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/posters/6_Ain_&_Kabel_Plakat.jpg",
    title: "Ain & Kabel",
    price: "Spørg efter pris",
    size: "-",
  },
  // {
  //   src: "/posters/test-plakat.png",
  //   title: "Ain & Kabel",
  //   price: "Spørg efter pris",
  //   size: "-",
  // },
];

const Posters = () => {
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
      {/* Slet her fra - */}
      <div className="flex justify-center bg-black	">
        <h1 className="text-green-400 text-2xl font-extrabold">
          Hjemmesiden er i øjeblikket under opdatering, så nogle oplysninger kan
          mangle. Tak for din tålmodighed!
        </h1>
      </div>
      {/* og hertil */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Plakater</h1>
        <p className="mb-8">
          Som et alternativ til mine originale malerier kan du købe en
          kunstplakat. Plakaterne er signerede og nummereret fra 1-100. Jeg
          laver ikke flere end 100 af hver.
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

export default Posters;
