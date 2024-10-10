import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/NarrativRåkunst/Jomfru til hest.jpeg",
    title: "Jomfru til hest",
    price: "16.000",
    size: "Akryl på lærred 100x120 cm",
  },
  {
    src: "/NarrativRåkunst/Hands up.jpeg",
    title: "Hands up! I",
    price: "16.000",
    size: "Akryl på lærred 120x100 cm",
  },
  {
    src: "/NarrativRåkunst/Destroyer of worlds.jpeg",
    title: "Verdensødelægger",
    price: "16.000.",
    size: "Akryl på lærred 120x100 cm",
  },
  {
    src: "/NarrativRåkunst/Bademesteren.jpeg",
    title: "Bademesteren",
    price: "18.000",
    size: "Akryl på lærred, 130x100 cm",
  },
  {
    src: "/NarrativRåkunst/Fabulator.jpg",
    title: "Hands up! II",
    price: "3.200",
    size: "Akryl på papir i ramme 32x41 cm",
  },
  {
    src: "/NarrativRåkunst/Elefanten i rummet.jpeg",
    title: "Elefanten i rummet",
    price: "34.000",
    size: "Akryl på lærred 205x160 cm",
  },
  {
    src: "/NarrativRåkunst/Danse macabre Kell Jarner 2017.jpg",
    title: "Danse Macabre",
    price: "18.000",
    size: "110x140 cm",
  },
  {
    src: "/NarrativRåkunst/Fugl og fæ.jpg",
    title: "Fugl og fæ",
    price: "6.000",
    size: "Akryl på lærred 55x65 cm",
  },
  {
    src: "/NarrativRåkunst/Håndværkere-Kell-Jarner-2018.webp",
    title: "Håndens arbejde",
    price: "16.000",
    size: "Akryl på lærred 100x120 cm",
  },
  {
    src: "/NarrativRåkunst/Kongen-og-kravlenisserne-Kell-Jarner-2019.webp",
    title: "Kongen og kravlenisserne",
    price: "9.000",
    size: "Akryl på lærred 100x60 cm",
  },
  {
    src: "/NarrativRåkunst/Partybussen-og-bykongen-Kell-Jarner-2018.webp",
    title: "Partybussen og bykongen",
    price: "20.000",
    size: "Akryl på lærred 200x115 cm",
  },

  {
    src: "/NarrativRåkunst/Disputs.jpeg",
    title: "Disputs",
    price: "3.200",
    size: "Akryl på papir 42x29,7 cm",
  },
  {
    src: "/NarrativRåkunst/Grumme-gerninger-pænt-tøj-Kell-Jarner-2018-1.webp",
    title: "Grumme gerninger, pænt tøj",
    price: "4.800",
    size: "Akryl på lærred, 56x67 cm",
  },

  {
    src: "/NarrativRåkunst/Fluernes herre Kell Jarner.png",
    title: "Fluernes herre",
    price: "6.200",
    size: "Akryl på lærred, 55x71 cm",
  },
];

const NarrativRåkunst = () => {
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
        <h1 className="text-3xl font-bold mb-4">Narrativ råkunst</h1>
        <p className="mb-8">
          Råkunst, også kaldet ‘art brut’ og ‘outsider art’, er et af mine
          maleriske hovedgreb. Jeg giver slip og maler løs. Grimt er godt, og
          fejl er perfekte. Her er der hænder og fødder, der vender den forkerte
          vej, og figurerne kæmper, falder, skriger, peger og tisser, ofte under
          stor sindsbevægelse. Der er en fortælling i gang.
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

export default NarrativRåkunst;
