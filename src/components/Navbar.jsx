import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/paintings", label: "Paintings" },
    { to: "/exhibitions", label: "Exhibitions" },
    { to: "/posters", label: "Posters" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50 flex justify-center">
      <div className="container flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="text-white hover:text-gray-300">
            <img
              className="w-52 h-20"
              src="Underskrift-logo_white.png"
              alt="Signature"
            />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-300 hover:text-white text-xl"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        ref={menuRef}
        className={`lg:hidden mt-4 ${
          isOpen ? "block" : "hidden"
        } bg-gray-800 text-white`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
