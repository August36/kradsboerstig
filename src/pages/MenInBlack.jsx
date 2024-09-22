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
    price: "3.300",
    size: "Akryl på lærred 34x34 cm",
  },
  {
    src: "/men-in-black/muh_taler.JPG",
    title: "Muhtaler",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/men-in-black/The Player.JPG",
    title: "The player",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/men-in-black/Aha-oplevelserne sta╠èr i k├©.jpeg",
    title: "Aha!",
    price: "3.600",
    size: "Akryl på lærred 34x34 cm",
  },
  {
    src: "/men-in-black/Blid som velour.jpeg",
    title: "Blid som velour",
    price: "3.300",
    size: "Akryl på lærred 32x32 cm",
  },
  {
    src: "/men-in-black/Der skal en st├ªrk mand til at g├©re en stor l├©gn sand.jpeg",
    title: "Der skal en stærk mand til at gøre en stor løgn sand",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Eeeeeek.jpeg",
    title: "Eeeeeek",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Exodimension.jpeg",
    title: "Exodimension",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Fra de dybe k├ªldre kom de.jpeg",
    title: "Fra de dybe kældre kom de",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/G├ªsten.jpeg",
    title: "Gæsten",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Grumpy.jpeg",
    title: "Grumpy",
    price: "3.600",
    size: "Akryl på lærred 34x34 cm",
  },
  {
    src: "/men-in-black/Gulag.jpeg",
    title: "Gulag",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/men-in-black/Han kom, han sa╠è og sprang i.jpeg",
    title: "Han kom, han så og sprang i",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Hans a╠èbenbaring var et aleneprojekt.jpeg",
    title: "Hans åbenbaring var et aleneprojekt",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Hvis du tager b├©rnene, sa╠è tager jeg bilen.jpeg",
    title: "Hvis du tager børnene, så tager jeg bilen",
    price: "3.300",
    size: "Akryl på lærred 32x32 cm",
  },
  {
    src: "/men-in-black/Kast lige min kunstfingerhudbekl├ªdte golfbold.jpeg",
    title: "Kast lige min kunstfingerhudbeklædte golfbold",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Ligger ordl├©s om natten.jpeg",
    title: "Ligger ordløs om natten",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Luften er flygtig som et opl├©sningsmiddel.jpeg",
    title: "Luften er flygtig som et opløsningsmiddel",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Moaar.jpg",
    title: "Mooar!",
    price: "3.300",
    size: "Akryl på lærred 32x32 cm",
  },
  {
    src: "/men-in-black/Ryster natten af min hud.jpeg",
    title: "Ryster natten af min hud",
    price: "3.600",
    size: "Akryl på lærred 34x34 cm",
  },
  {
    src: "/men-in-black/Soldat.jpeg",
    title: "Soldat",
    price: "3.000",
    size: "Akryl på lærred 30x30 cm",
  },
  {
    src: "/men-in-black/Ubegribelig poesi fra udmarken.jpeg",
    title: "Ubegribelig poesi fra udmarken",
    price: "3.500",
    size: "Akryl på lærred 36x30 cm",
  },
  {
    src: "/men-in-black/Venus.jpeg",
    title: "Venus",
    price: "3.300",
    size: "Akryl på lærred 32x32 cm",
  },
  {
    src: "/men-in-black/Vi er hvad vi g├©r.jpeg",
    title: "Vi er hvad vi gør",
    price: "3.300 kr.",
    size: "Akryl på lærred 32x32 cm",
  },
  {
    src: "/men-in-black/Yngling.jpeg",
    title: "Yngling",
    price: "3.300",
    size: "Akryl på lærred 32x32",
  },
  {
    src: "/men-in-black/Hay man.jpg",
    title: "Hay man",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/men-in-black/Landmand.jpg",
    title: "Landmand",
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
