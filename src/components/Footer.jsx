const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
          {/* Social Media Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-2 text-white">Følg mig</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kelljarner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://dk.pinterest.com/kelljarner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Pinterest
              </a>
              <a
                href="https://www.facebook.com/JarnerArt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Klaviyo Form */}
          {/* <div className="klaviyo-form-XrCucz"></div> */}

          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-2 text-white">Kontakt</h3>
            <p className="mb-2 text-white">
              Tlf:{" "}
              <a href="tel:+1234567890" className="hover:underline text-white">
                +45 30 31 90 91
              </a>
            </p>
            <p className="text-white">
              Email:{" "}
              <a
                href="mailto:kjarner@me.com"
                className="hover:underline text-white"
              >
                kjarner@me.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
