import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import NewsArticle from './components/NewsArticle';
import Navbar from './components/Navbar';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import heroImage from './assets/hero-image.jpg';
import articleImg1 from './assets/children-toys.avif';
import articleImg2 from './assets/article2img.jpg'; // Ensure you have this image or change it to the correct path
import Footer from './components/Footer';

function App() {
  const articles = [
    {
      image: articleImg1,
      title: 'Article 1',
      content: 'This is the content of article 1.',
    },
    {
      image: articleImg2,
      title: 'Article 2',
      content: 'This is the content of article 2.',
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
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
