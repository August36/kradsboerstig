import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/men-in-black/diaspora.JPG",
    title: "Diaspora",
    price: "2400 DKK",
    size: "30x30 cm",
  },
  {
    src: "/men-in-black/kan_man_stå_af_denne_planet.JPG",
    title: "Kan man stå af denne planet",
    price: "Ikke sat",
    size: "50x40 cm",
  },
  {
    src: "/men-in-black/muh_taler.JPG",
    title: "Muh taler",
    price: "Ikke sat",
    size: "50x40 cm",
  },
  {
    src: "/men-in-black/the_player.JPG",
    title: "The player",
    price: "Ikke sat",
    size: "50x40 cm",
  },
];

const Dogs = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleOpenModal = (index) => {
    console.log("Opening modal with index:", index);
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
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
        <h1 className="text-3xl font-bold mb-4">Men in Black</h1>
        <p className="mb-8">This is the men in black page.</p>
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

export default Dogs;
