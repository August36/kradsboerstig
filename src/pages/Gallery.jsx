import { Link } from 'react-router-dom';

const images = [
  { src: '/portraits/Jesper-Binzer-DBPM-Kell-Jarner-scaled.webp', link: '/Portraits', text: 'Portraits' },
  { src: '/faces/Ansigt9-Hvorformenneske-Kell-Jarner-2017.webp', link: '/Faces', text: 'Faces' },
  { src: '/cave-paintings/Den-skamfødte-Kell-Jarner.webp', link: '/CavePaintings', text: 'Cave Paintings' },
  { src: '/dogs/4-Forpotestand-Kell-Jarner.webp', link: '/Dogs', text: 'Dogs' },
  { src: '/toon/Dyrene-fra-Tramonti-Kell-Jarner-2016.webp', link: '/Toon', text: 'Toon' },
  { src: '/morbid/Herobar-3.24-Kell-Jarner.webp', link: '/Morbid', text: 'Morbid' },
  { src: '/art-brut/Håndværkere-Kell-Jarner-2018.webp', link: '/ArtBrut', text: 'Art Brut' },
  { src: '/realistic/Vandbøffel-Kell-Jarner.webp', link: '/Realistic', text: 'Realistic' },
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="mb-8">This is the Gallery page.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Link to={image.link} key={index} className="relative overflow-hidden bg-gray-200 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
            {/* Static Text for Mobile */}
            <div className="block lg:hidden bg-black bg-opacity-60 text-white text-xl font-bold flex items-center justify-center p-2">
              {image.text}
            </div>
            {/* Image */}
            <img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform lg:group-hover:scale-105"
            />
            {/* Overlay Text for Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
              {image.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
