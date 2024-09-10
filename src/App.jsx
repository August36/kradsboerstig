import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NewsArticle from "./components/NewsArticle";
import About from "./pages/About";
import Paintings from "./pages/Paintings";
import Contact from "./pages/Contact";
import Posters from "./pages/Posters";
import HuleMalerier from "./pages/HuleMalerier";
import Toon from "./pages/Toon";
import Morbid from "./pages/Morbid";
import NarrativRåkunst from "./pages/NarrativRåkunst";
import Realistic from "./pages/Realistic";
import NewsLetter from "./components/NewsLetter";
import Exhibitions from "./pages/Exhibitions";
import MenInBlack from "./pages/MenInBlack";
import FugleMennesker from "./pages/FugleMennesker";
import heroImage from "/HuleMalerier/Den-skamfødte-Kell-Jarner.webp";
import articleImg1 from "/NarrativRåkunst/Partybussen-og-bykongen-Kell-Jarner-2018.webp";
import articleImg2 from "/morbid/Mord-i-Muxia-Kell-Jarner.webp";
import Layout from "./components/Layout"; // Import Layout

function App() {
  // Add useEffect to load the Klaviyo script
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src =
      "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SPxJZ8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const articles = [
    {
      image: articleImg1,
      title: "Article 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: articleImg2,
      title: "Article 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Router>
      <Layout>
        {" "}
        {/* Wrap the whole app content with Layout */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Slet her fra - */}
                <div className="flex justify-center bg-black	">
                  <h1 className="text-green-400 text-2xl font-extrabold">
                    Hjemmesiden er i øjeblikket under opdatering, så nogle
                    oplysninger kan mangle. Tak for din tålmodighed!
                  </h1>
                </div>
                {/* og hertil */}
                <Helmet>
                  <title>Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Welcome to the homepage of Kell Jarner Art."
                  />
                </Helmet>
                <Hero image={heroImage} />
                <div className="w-full max-w-5xl mx-auto mb-10">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-8 text-center sm:text-left">
                    Nyheder
                  </h1>
                  {/************************** INDKOMMENTER NewsArticle og NewsLetter når det skal bruge **************************/}
                  <p>Der er p.t. ingen nyheder</p>
                  {/* {articles.map((article, index) => (
                    <NewsArticle key={index} {...article} />
                  ))} */}
                </div>
                {/* <NewsLetter /> */}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>About Us - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Learn more about Kell Jarner Art and our mission."
                  />
                </Helmet>
                <About />
              </>
            }
          />
          <Route
            path="/paintings"
            element={
              <>
                <Helmet>
                  <title>Paintings - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Explore our collection of paintings."
                  />
                </Helmet>
                <Paintings />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contact Us - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Get in touch with Kell Jarner Art for any inquiries."
                  />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="/posters"
            element={
              <>
                <Helmet>
                  <title>Posters - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Discover our range of posters."
                  />
                </Helmet>
                <Posters />
              </>
            }
          />
          <Route
            path="/exhibitions"
            element={
              <>
                <Helmet>
                  <title>Exhibitions - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Find out about our current and past exhibitions."
                  />
                </Helmet>
                <Exhibitions />
              </>
            }
          />
          <Route
            path="/HuleMalerier"
            element={
              <>
                <Helmet>
                  <title>Hulemalerier- Kell Jarner Art</title>
                  <meta name="description" content="hulemalerier" />
                </Helmet>
                <HuleMalerier />
              </>
            }
          />
          <Route
            path="/toon"
            element={
              <>
                <Helmet>
                  <title>Toon - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Check out our Toon art collection."
                  />
                </Helmet>
                <Toon />
              </>
            }
          />
          <Route
            path="/morbid"
            element={
              <>
                <Helmet>
                  <title>Morbid - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="View our Morbid art collection."
                  />
                </Helmet>
                <Morbid />
              </>
            }
          />
          <Route
            path="/NarrativRåkunst"
            element={
              <>
                <Helmet>
                  <title>Narrativ Råkunst - Kell Jarner Art</title>
                  <meta name="description" content="NarrativRåkunst" />
                </Helmet>
                <NarrativRåkunst />
              </>
            }
          />
          <Route
            path="/realistic"
            element={
              <>
                <Helmet>
                  <title>Realistic - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Discover realistic art pieces."
                  />
                </Helmet>
                <Realistic />
              </>
            }
          />
          <Route
            path="/meninblack"
            element={
              <>
                <Helmet>
                  <title>Men In Black - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="See our Men In Black art collection."
                  />
                </Helmet>
                <MenInBlack />
              </>
            }
          />
          <Route
            path="/fuglemennesker"
            element={
              <>
                <Helmet>
                  <title>FugleMennesker - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Explore the FugleMennesker art collection."
                  />
                </Helmet>
                <FugleMennesker />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
