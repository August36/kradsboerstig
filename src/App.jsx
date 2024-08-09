import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import NewsArticle from './components/NewsArticle';
import Navbar from './components/Navbar';
import About from './pages/About';
import Paintings from './pages/Paintings';
import Contact from './pages/Contact';
import Posters from './pages/Posters'
import Portraits from './pages/Portraits';
import Faces from './pages/Faces';
import CavePaintings from './pages/CavePaintings';
import Dogs from './pages/Dogs';
import Toon from './pages/Toon';
import Morbid from './pages/Morbid';
import ArtBrut from './pages/ArtBrut';
import Realistic from './pages/Realistic';
import heroImage from '/cave-paintings/Den-skamfødte-Kell-Jarner.webp';
import articleImg1 from '/art-brut/Partybussen-og-bykongen-Kell-Jarner-2018.webp';
import articleImg2 from '/morbid/Mord-i-Muxia-Kell-Jarner.webp'; 
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';
import Exhibitions from './pages/Exhibitions';

function App() {
  const articles = [
    {
      image: articleImg1,
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
      image: articleImg2,
      title: 'Article 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    // Add more articles here
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero image={heroImage} />
            <div className="container mx-auto p-4">
              {articles.map((article, index) => (
                <NewsArticle key={index} {...article} />
              ))}
            </div>
            <NewsLetter />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/Portraits" element={<Portraits />} />
        <Route path="/Faces" element={<Faces />} />
        <Route path="/CavePaintings" element={<CavePaintings />} />
        <Route path="/Dogs" element={<Dogs />} />
        <Route path="/Toon" element={<Toon />} />
        <Route path="/Morbid" element={<Morbid />} />
        <Route path="/ArtBrut" element={<ArtBrut />} />
        <Route path="/Realistic" element={<Realistic />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
