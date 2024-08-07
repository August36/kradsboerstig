import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from '../components/Modal';  // Import the Modal component

const images = [
  {
    src: "art-brut/Boudoir-Kell-Jarner-2017.webp",
    title: "Boudoir",
    price: "599",
    size: "50x70 cm",
  },
  {
    src: "art-brut/Danse-macabre-Kell-Jarner-2017.webp",
    title: "Danse macabre",
    price: "499",
    size: "40x60 cm",
  },
  {
    src: "art-brut/Frelser-scaled.webp",
    title: "Frelser",
    price: "699",
    size: "60x80 cm",
  },
  {
    src: "art-brut/Fugl-og-fæ-Kell-Jarner-2019.webp",
    title: "Fugl og fæ",
    price: "549",
    size: "50x70 cm",
  },
  {
    src: "art-brut/Grumme-gerninger-pænt-tøj-Kell-Jarner-2018-1.webp",
    title: "Grumme gerninger, pænt tøj",
    price: "499",
    size: "40x60 cm",
  },
  {
    src: "art-brut/Håndværkere-Kell-Jarner-2018.webp",
    title: "Håndværkere",
    price: "799",
    size: "70x100 cm",
  },
  {
    src: "art-brut/Kafisos-og-Liriope-Kell-Jarner-2018.webp",
    title: "Kafisos og Liriope",
    price: "599",
    size: "50x70 cm",
  },
  {
    src: "art-brut/Kongen-og-kravlenisserne-Kell-Jarner-2019.webp",
    title: "Kongen og kravlenisserne",
    price: "749",
    size: "60x80 cm",
  },
  {
    src: "art-brut/Partybussen-og-bykongen-Kell-Jarner-2018.webp",
    title: "Partybussen og bykongen",
    price: "899",
    size: "70x100 cm",
  },
  {
    src: "art-brut/Profeten-Kell-Jarner-2017.webp",
    title: "Profeten",
    price: "699",
    size: "60x80 cm",
  },
  {
    src: "art-brut/Skytsengel.-Kell-Jarner-2018.webp",
    title: "Skytsengel",
    price: "599",
    size: "50x70 cm",
  },
  {
    src: "art-brut/Smugkig-Kell-Jarner-2017.webp",
    title: "Smugkig",
    price: "499",
    size: "40x60 cm",
  },
  {
    src: "art-brut/Sommer-og-Lars-Kell-Jarner-2018.webp",
    title: "Sommer og Lars",
    price: "799",
    size: "70x100 cm",
  },
];

const ArtBrut = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Breadcrumbs />
        <h1 className="text-3xl font-bold mb-4">Art Brut</h1>
        <p className="mb-8">This is the Art Brut page.</p>
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

export default ArtBrut;
