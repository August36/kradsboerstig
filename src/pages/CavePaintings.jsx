import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  // {
  //   src: '/cave-paintings/Den-skamfødte-Kell-Jarner.webp',
  //   title: 'Den skamfødte',
  //   price: '699',
  //   size: '60x80 cm'
  // },
  // {
  //   src: "/cave-paintings/Ekstase-solgt-Kell-Jarner.webp",
  //   title: "Ekstase",
  //   price: "749",
  //   size: "60x80 cm",
  // },
  {
    src: "/cave-paintings/Hjortes-hjerner-Kell-Jarner.webp",
    title: "Hjortes hjerner",
    price: "Spørg efter pris",
    size: "TILFØJ",
  },
  {
    src: "/cave-paintings/Kampen-på-ord-om-en-svævende-kvinde-Kell-Jarner.webp",
    title: "Kampen på ord om en svævende kvinde",
    price: "Spørg efter pris",
    size: "70x100 cm",
  },
  // {
  //   src: "/cave-paintings/Mandesnak-Kell-Jarner.webp",
  //   title: "Mandesnak",
  //   price: "499",
  //   size: "40x60 cm",
  // },
  {
    src: "/cave-paintings/Skabelsen-af-en-pandababy-Kell-Jarner.webp",
    title: "Skabelsen af en pandababy",
    price: "Spørg efter pris",
    size: "50x70 cm",
  },
  {
    src: "/cave-paintings/The-Trump-afterparty-Kell-Jarner.webp",
    title: "The Trump afterparty",
    price: "Spørg efter pris",
    size: "60x80 cm",
  },
  {
    src: "/cave-paintings/Uskyld-Kell-Jarner.webp",
    title: "Uskyld",
    price: "Spørg efter pris",
    size: "60x80 cm",
  },
  {
    src: "/cave-paintings/Varslet-Kell-Jarner.webp",
    title: "Varslet",
    price: "Spørg efter pris",
    size: "60x80 cm",
  },
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
        <h1 className="text-3xl font-bold mb-4">Hulemalerier</h1>
        <p className="mb-8">
          Igen en serie, som har fortællingen som omdrejningspunkt. På en
          baggrund der kan minde om hvid klippesten, folder scenarier sig ud:
          Videnskabsmænd diskuterer med et (umælende) dyr om en svævende kvinde.
          En pandababy bliver skabt, øjensynligt af en kvinde med lang hals,
          slør og mange bryster. En maskeret nonne med hofteholdere skal til at
          sætte øksen i en høne med menneskehovede, mens alle kigger den anden
          vej på Trump og Putin, Og meget andet. Crazy stuff.
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

export default CavePaintings;
