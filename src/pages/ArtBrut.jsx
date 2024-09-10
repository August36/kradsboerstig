import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import Breadcrumbs from "../components/Breadcrumbs";
import Modal from "../components/Modal"; // Import the Modal component

const images = [
  {
    src: "art-brut/Fabulator.jpg",
    title: "Fabulator",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Boudoir-Kell-Jarner-2017.webp",
    title: "Boudoir",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Danse-macabre-Kell-Jarner-2017.webp",
    title: "Danse macabre",
    price: "Spørg efter pris",
    size: "-",
  },
  // {
  //   src: "art-brut/Frelser-scaled.webp",
  //   title: "Frelser",
  //   price: "699",
  //   size: "60x80 cm",
  // },
  {
    src: "art-brut/Fugl-og-fæ-Kell-Jarner-2019.webp",
    title: "Fugl og fæ",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Grumme-gerninger-pænt-tøj-Kell-Jarner-2018-1.webp",
    title: "Grumme gerninger, pænt tøj",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Håndværkere-Kell-Jarner-2018.webp",
    title: "Håndværkere",
    price: "Spørg efter pris",
    size: "-",
  },
  // {
  //   src: "art-brut/Kafisos-og-Liriope-Kell-Jarner-2018.webp",
  //   title: "Kafisos og Liriope",
  //   price: "599",
  //   size: "50x70 cm",
  // },
  {
    src: "art-brut/Kongen-og-kravlenisserne-Kell-Jarner-2019.webp",
    title: "Kongen og kravlenisserne",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Partybussen-og-bykongen-Kell-Jarner-2018.webp",
    title: "Partybussen og bykongen",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Disputs.jpeg",
    title: "Disputs",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Elefanten i rummet.jpeg",
    title: "Elefanten i rummet",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Fisker.jpg",
    title: "Fisker",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Fluernes herre Kell Jarner.png",
    title: "Fluernes herre",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Frelser-scaled.webp",
    title: "Frelser",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Håndværkere-Kell-Jarner-2018.webp",
    title: "Håndværkere",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Kafisos-og-Liriope-Kell-Jarner-2018.webp",
    title: "Kafisos & Liriope",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/Profeten-Kell-Jarner-2017.webp",
    title: "Profeten",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/råkunst2/Hands up.jpeg",
    title: "Hands up",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/råkunst2/Jomfru til hest.jpeg",
    title: "Jomfru til hest",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/råkunst2/Olfert.JPG",
    title: "Olfert",
    price: "Spørg efter pris",
    size: "-",
  },
  {
    src: "art-brut/råkunst2/Togkupe Kell Jarner 2019.png",
    title: "Togkupe",
    price: "Spørg efter pris",
    size: "-",
  },
  // {
  //   src: "art-brut/Skytsengel.-Kell-Jarner-2018.webp",
  //   title: "Skytsengel",
  //   price: "Spørg efter pris",
  //   size: "-",
  // },
  // {
  //   src: "art-brut/råkunst2/Smugkig-Kell-Jarner-2017.webp",
  //   title: "Smugkig",
  //   price: "Spørg efter pris",
  //   size: "-",
  // },
  // {
  //   src: "art-brut/råkunst2/Sommer-og-Lars-Kell-Jarner-2018.webp",
  //   title: "Sommer & Lars",
  //   price: "Spørg efter pris",
  //   size: "-",
  // },
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

export default ArtBrut;
