import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mt-28">
      <Navbar />
      <div className="flex justify-center bg-black	">
          <h1 className="text-green-400 text-2xl font-extrabold">
          Hjemmesiden er i øjeblikket under opdatering, så nogle oplysninger kan mangle. Tak for din tålmodighed!
          </h1>
          </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
