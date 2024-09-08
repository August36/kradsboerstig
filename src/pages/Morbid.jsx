import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  // {
  //   src: '/morbid/Dansen-om-guldkalven-Kell-Jarner.webp',
  //   title: 'Dansen om Guldkalven',
  //   price: '699',
  //   size: '70x100 cm'
  // },
  {
    src: "/morbid/Helikopteren-ankommer-efter-middag-Kell-Jarner.webp",
    title: "Helikopteren Ankommer Efter Middag",
    price: "Spørg efter pris",
    size: "70x100 cm",
  },
  {
    src: "/morbid/Tænkehatten.jpeg",
    title: "Tænkehatten",
    price: "Spørg efter pris",
    size: "70x100 cm",
  },
  {
    src: "/morbid/Medusa.jpeg",
    title: "Medusa",
    price: "Spørg efter pris",
    size: "70x100 cm",
  },
  // {
  //   src: "/morbid/Herobar-3.24-Kell-Jarner.webp",
  //   title: "Herobar 3.24",
  //   price: "699",
  //   size: "60x80 cm",
  // },
  // {
  //   src: "/morbid/Hullet-Kell-Jarner.webp",
  //   title: "Hullet",
  //   price: "599",
  //   size: "50x70 cm",
  // },
  {
    src: "/morbid/Kamp-kat-og-klovne.webp",
    title: "Kat og Klovne",
    price: "Spørg efter pris",
    size: "70x100 cm",
  },
  // {
  //   src: "/morbid/Mord-i-Muxia-Kell-Jarner.webp",
  //   title: "Mord i Muxia",
  //   price: "649",
  //   size: "60x80 cm",
  // },
  {
    src: "/morbid/Olfert-Kell-Jarner.webp",
    title: "Olfert",
    price: "Spørg efter pris",
    size: "50x70 cm",
  },
  {
    src: "/morbid/Selvportræt-med-snublende-hunde-Kell-Jarner.webp",
    title: "Selvportræt med Snublende Hunde",
    price: "Spørg efter pris",
    size: "70x100 cm",
  },
  // {
  //   src: "/morbid/Syndesvinehund-Kell-Jarner.webp",
  //   title: "Syndesvinehund",
  //   price: "699",
  //   size: "60x80 cm",
  // },
];

const Morbid = () => {
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
        <h1 className="text-3xl font-bold mb-4">Macabre</h1>
        <p className="mb-8">
          Kunst har mange kilder, og én af dem er mørket, døden, lidelsen,
          grusomheden og ondskaben. Mine makabre malerier er i familie med den
          narrative råkunst, men humøret er anderledes, og fremtillingen er ofte
          mere gennemtænkt og realistisk.
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

export default Morbid;
