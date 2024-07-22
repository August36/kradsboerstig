const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Pinterest
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
            <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
