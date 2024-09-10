import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the mobile menu's visibility
  const menuRef = useRef(null); // Reference for detecting clicks outside the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu's open/close state
  };

  // Close the mobile menu when clicking outside
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
    { to: "/about", label: "Om mig" },
    { to: "/GalleriKrasbørstig", label: "Galleri Krasbørstig" },
    { to: "/Malerier", label: "Malerier" },
    { to: "/posters", label: "Plakater" },
    // { to: "/contact", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50 flex items-center justify-between">
      {/* Home Logo */}
      <div className="text-white z-50">
        <Link to="/" className="text-white hover:text-gray-300">
          <img
            className="w-52 h-20"
            src="Underskrift-logo_white.png"
            alt="Signature"
          />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex space-x-6">
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

      {/* Burger Button for Mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
        )}
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 left-0 w-full bg-gray-800 text-white transform ${
          isOpen ? "translate-y-0" : "hidden"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Mobile Menu Header */}
        <div className="relative flex justify-end items-center p-4">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mr-4"
            aria-label="Close menu"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-end space-y-4 mt-4 pr-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xl py-2 hover:bg-gray-700 text-right pr-4"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
