import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/HuleMalerier/Hjortes-hjerner-Kell-Jarner.webp",
    title: "Hjortes hjerner",
    price: "10.500",
    size: "Akryl på lærred 78x96 cm",
  },
  {
    src: "/HuleMalerier/Kampen-på-ord-om-en-svævende-kvinde-Kell-Jarner.webp",
    title: "Kampen på ord om en svævende kvinde",
    price: "10.200",
    size: "Akryl på lærred 100x69 cm",
  },
  {
    src: "/HuleMalerier/Skabelsen-af-en-pandababy-Kell-Jarner.webp",
    title: "Skabelsen af en pandababy",
    price: "10.500",
    size: "70x102 cm",
  },
  {
    src: "/HuleMalerier/The-Trump-afterparty-Kell-Jarner.webp",
    title: "The Trump afterparty",
    price: "10.000",
    size: "Akryl på lærred 100x60 cm",
  },
  {
    src: "/HuleMalerier/Uskyld-Kell-Jarner.webp",
    title: "Uskyld",
    price: "22.000",
    size: "Akryl på lærred 125x200 cm",
  },
  {
    src: "/HuleMalerier/Varslet-Kell-Jarner.webp",
    title: "Varslet",
    price: "32.000",
    size: "Akryl på lærred 200x150 cm",
  },
  {
    src: "/HuleMalerier/Idyl med pige og hest.jpeg",
    title: "Idyl med pige og hest",
    price: "36.000",
    size: "Akryl på lærred 200x160 cm",
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
          baggrund, der kan minde om hvid klippesten, folder scenarier sig ud:
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
