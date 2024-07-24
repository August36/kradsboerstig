import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="text-white hover:text-gray-300">Kradsbørstig</Link>
        </div>
        <div className="space-x-4">
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
          <Link to="/posters" className="text-gray-300 hover:text-white">Posters</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
