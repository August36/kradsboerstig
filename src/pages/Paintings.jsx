import { Link } from "react-router-dom";

const images = [
  {
    src: "/art-brut/Fabulator.jpg",
    link: "/ArtBrut",
    text: "Råkunst",
  },
  {
    src: "/toon/Den-blå-hund-og-menneskedyret-Kell-Jarner-2017.webp",
    link: "/Toon",
    text: "Toon art",
  },
  {
    src: "/men-in-black/diaspora.JPG",
    link: "/MenInBlack",
    text: "Men in black",
  },
  {
    src: "/cave-paintings/Hjortes-hjerner-Kell-Jarner.webp",
    link: "/CavePaintings",
    text: "Hulemalerier",
  },
  {
    src: "/morbid/Medusa.jpeg",
    link: "/Morbid",
    text: "Macabre",
  },
  { src: "/realistic/Hane1.jpg", link: "/Realistic", text: "Realistisk" },
  {
    src: "/fuglemennesker/Vejrhaner.jpg",
    link: "/FugleMennesker",
    text: "Fuglemennesker",
  },
];

const Paintings = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Paintings</h1>
      <p className="mb-8">
        This is the Paintings page. It contains eight different rooms
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Link
            to={image.link}
            key={index}
            className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
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
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
              {image.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
