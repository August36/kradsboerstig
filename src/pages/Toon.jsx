import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/toon/Den-blå-hund-og-menneskedyret-Kell-Jarner-2017.webp",
    title: "Den Blå Hund og Menneskedyret",
    price: "Spørg efter pris",
    size: "70x90 cm",
  },
  // {
  //   src: '/toon/Dyrene-fra-Tramonti-Kell-Jarner-2016.webp',
  //   title: 'Dyrene fra Tramonti',
  //   price: '850',
  //   size: '60x80 cm'
  // },
  // {
  //   src: "/toon/Gudehunden-Kell-Jarner-2018.webp",
  //   title: "Gudehunden",
  //   price: "950",
  //   size: "80x100 cm",
  // },
  // {
  //   src: "/toon/Hævnen-Kell-Jarner-2016.webp",
  //   title: "Hævnen",
  //   price: "880",
  //   size: "75x95 cm",
  // },
  // {
  //   src: "/toon/Ko-for-to-scaled.webp",
  //   title: "Ko for To",
  //   price: "920",
  //   size: "85x105 cm",
  // },
  // {
  //   src: "/toon/Lille-vredladen-hund.webp",
  //   title: "Lille Vredladen Hund",
  //   price: "870",
  //   size: "70x90 cm",
  // },
  {
    src: "/toon/Old-innocent.webp",
    title: "Old Innocent",
    price: "Spørg efter pris",
    size: "65x85 cm",
  },
  // {
  //   src: "/toon/Ørlingerne-2014-Kell-Jarner.webp",
  //   title: "Ørlingerne",
  //   price: "900",
  //   size: "80x100 cm",
  // },
  {
    src: "/toon/Se-hvad-jeg-har-lavet-Kell-Jarner-2017.webp",
    title: "Se Hvad Jeg Har Lavet",
    price: "Spørg efter pris",
    size: "75x95 cm",
  },
  {
    src: "/toon/Tiger2-Kell-Jarner.webp",
    title: "Tiger 2",
    price: "Spørg efter pris",
    size: "80x100 cm",
  },
  // {
  //   src: "/toon/Trolden-fra-Tramonti.webp",
  //   title: "Trolden fra Tramonti",
  //   price: "880",
  //   size: "70x90 cm",
  // },
  // {
  //   src: "/toon/Udåden-Kell-Jarner-2016.webp",
  //   title: "Udåden",
  //   price: "850",
  //   size: "60x80 cm",
  // },
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
        <h1 className="text-3xl font-bold mb-4">Toon art</h1>
        <p className="mb-8">This is the toon art page.</p>
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
