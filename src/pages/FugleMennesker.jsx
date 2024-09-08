import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/fuglemennesker/Vejrhaner.jpg",
    title: "Vejrhaner",
    price: "Spørg efter pris",
    size: "70x90 cm",
  },
  {
    src: "/fuglemennesker/Hulahop.jpg",
    title: "Hulahop",
    price: "Spørg efter pris",
    size: "70x90 cm",
  },
  {
    src: "/fuglemennesker/Oxymoron.jpg",
    title: "Oxymoron",
    price: "Spørg efter pris",
    size: "70x90 cm",
  },
];

const Toon = () => {
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
        <h1 className="text-3xl font-bold mb-4">
          Fuglemennesker og menneskefugle
        </h1>
        <p className="mb-8">
          Dette er en serie portrætter af mennesker med næb og vinger eller
          måske snarere fugle med brystvorter og blodskudte øjne. Én leger med
          hulahopring, en anden ryger og har glorie, en tredje poserer som en
          bodybuilder. De har alle lange næb, ofte vendt åbent og skrigende mod
          himlen, og nogle kan udånde ild eller fange fluer med en lang tunge.
          Hver af dem udtrykker, trods fuglen i sig, noget menneskeligt i form
          af sårbarhed, overlegenhed, pinlighed, usikkerhed eller evnen til at
          lege.
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

export default Toon;
