import { Link } from "react-router-dom";

const images = [
  {
    src: "/NarrativRåkunst/Fabulator.jpg",
    link: "/NarrativRåkunst",
    text: "Narrativ råkunst",
  },
  {
    src: "/morbid/Medusa.jpeg",
    link: "/Morbid",
    text: "Macabre",
  },
  {
    src: "/men-in-black/diaspora.JPG",
    link: "/MenInBlack",
    text: "Men in black",
  },
  {
    src: "/HuleMalerier/Hjortes-hjerner-Kell-Jarner.webp",
    link: "/HuleMalerier",
    text: "Hulemalerier",
  },
  {
    src: "/fuglemennesker/Vejrhaner.jpg",
    link: "/FugleMennesker",
    text: "Fuglemennesker",
  },
];

const Malerier = () => {
  return (
    <>
      <div className="container mx-auto p-4 mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Malerier</h1>
        <p className="mb-8">
          Her kan du se de malerier, jeg har til salg. Jeg har flere maleriske
          greb og serier, så de er inddelt i forskellige rum, som du kan besøge
          nedenfor.{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Link
              to={image.link}
              key={index}
              className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 group"
            >
              {/* Static Text for All Screens */}
              <div className="absolute inset-0 bg-black bg-opacity-60 text-white text-xl font-bold flex items-center justify-center p-2 z-10">
                {image.text}
              </div>
              {/* Image */}
              <img
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
              />
              {/* Overlay Text for Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {image.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Malerier;
