import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/men-in-black/diaspora.JPG",
    title: "Diaspora",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/men-in-black/kan_man_stå_af_denne_planet.JPG",
    title: "Kan man stå af denne planet",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/men-in-black/muh_taler.JPG",
    title: "Muhtaler",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/men-in-black/the_player.JPG",
    title: "The player",
    price: "Spørg efter pris",
    size: "-",
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
        <h1 className="text-3xl font-bold mb-4">Men in black</h1>
        <p className="mb-8">
          I denne serie - som har lånt sit navn fra coronatidens oprørsbevægelse
          - er det sorte udtryk for den isolation, vi oplever ved at være
          adskilte fra hinanden. Figurernes ansigter træder frem som ridser, og
          de fremstår som antihelte. En gnavpot, der brokker sig, når Tivoli
          åbner, en strandløve, der ikke kan score og en fraskilt familiefar,
          der reflekterer over, at han hellere vil have bilen end børnene.
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

export default Dogs;
