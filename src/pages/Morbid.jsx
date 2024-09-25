import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "/morbid/Tænkehatten.jpeg",
    title: "Tænkehatten",
    price: "46.000",
    size: "Akryl på lærred 268x205 cm",
  },
  {
    src: "/morbid/Medusa.jpeg",
    title: "Medusa",
    price: "6.500",
    size: "Akryl på lærred 60x60 cm",
  },
  {
    src: "/morbid/Katte og klovne.jpg",
    title: "Kat og klovne",
    price: "38.000",
    size: "Akryl på lærred 200x160 cm",
  },
  {
    src: "/morbid/Olfert Kell Jarner.jpg",
    title: "Olfert",
    price: "22.000",
    size: "akryl på lærred, 160x160 cm",
  },
  {
    src: "/morbid/Selvportræt-med-snublende-hunde-Kell-Jarner.webp",
    title: "Selvportræt med snublende hunde",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/morbid/Hvis-dit-højre-øje.jpg",
    title: "Hvis dit højre øje bedrager dig",
    price: "2.200",
    size: "Akryl på lærred, 20x20 cm",
  },
  {
    src: "/morbid/Bjørnehue.jpeg",
    title: "Bjørnehue",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/morbid/Ghoul.jpeg",
    title: "Ghoul",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/morbid/Markedskræfter.jpeg",
    title: "Markedskræfter",
    price: "2.200",
    size: "Akryl på lærred, 20x20 cm",
  },
  {
    src: "/morbid/Maskefald bag hækken.jpeg",
    title: "Maskefald bag hækken",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/morbid/Middagen.JPG",
    title: "Middagen",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/morbid/Skyen.jpg",
    title: "Skyen",
    price: "16.000",
    size: "Akryl på lærred 100x120 cm",
  },
  {
    src: "/morbid/Skyerne.jpeg",
    title: "Skyerne",
    price: "16.000",
    size: "Akryl på lærred 100x120 cm",
  },
  {
    src: "/morbid/Spektable.jpeg",
    title: "Spektakle",
    price: "12.000",
    size: "Akryl på lærred, 120x38",
  },
  {
    src: "/toon/Den-blå-hund-og-menneskedyret-Kell-Jarner-2017.webp",
    title: "Den Blå Hund og Menneskedyret",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "/toon/Se-hvad-jeg-har-lavet-Kell-Jarner-2017.webp",
    title: "Se Hvad Jeg Har Lavet",
    price: "Spørg efter pris",
    size: "-",
  },
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
