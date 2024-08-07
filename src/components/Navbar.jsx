import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="text-white hover:text-gray-300">Krasbørstig</Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/paintings" className="text-gray-300 hover:text-white">Paintings</Link>
          <Link to="/Exhibitions" className="text-gray-300 hover:text-white">Exhibitions</Link>
          <Link to="/posters" className="text-gray-300 hover:text-white">Posters</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`lg:hidden mt-4 ${isOpen ? 'block' : 'hidden'} bg-gray-800 text-white`}>
        <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
        <Link to="/paintings" className="block px-4 py-2 hover:bg-gray-700">Paintings</Link>
        <Link to="/Exhibitions" className="block px-4 py-2 hover:bg-gray-700">Exhibitions</Link>
        <Link to="/posters" className="block px-4 py-2 hover:bg-gray-700">Posters</Link>
        <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
