import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
// import NewsArticle from "./components/NewsArticle";
import OmMig from "./pages/OmMig";
import Malerier from "./pages/Malerier";
import Kontakt from "./pages/Kontakt";
import Plakater from "./pages/Plakater";
import HuleMalerier from "./pages/HuleMalerier";
import Morbid from "./pages/Morbid";
import NarrativRåkunst from "./pages/NarrativRåkunst";
// import NewsLetter from "./components/NewsLetter";
import GalleriKrasbørstig from "./pages/GalleriKrasbørstig";
import MenInBlack from "./pages/MenInBlack";
import FugleMennesker from "./pages/FugleMennesker";
import heroImage from "/HuleMalerier/Den-skamfødte-Kell-Jarner.webp";
// import articleImg1 from "/NarrativRåkunst/Partybussen-og-bykongen-Kell-Jarner-2018.webp";
// import articleImg2 from "/morbid/Mord-i-Muxia-Kell-Jarner.webp";
import Layout from "./components/Layout"; // Import Layout

function App() {
  // Add useEffect to load the Klaviyo script
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.type = "text/javascript";
  //   script.src =
  //     "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SPxJZ8";
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const articles = [
  //   {
  //     image: articleImg1,
  //     title: "Article 1",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   {
  //     image: articleImg2,
  //     title: "Article 2",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  // ];

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
                <Helmet>
                  <title>Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Welcome to the homepage of Kell Jarner Art."
                  />
                </Helmet>
                <Hero image={heroImage} />
              </>
            }
          />
          <Route
            path="/OmMig"
            element={
              <>
                <Helmet>
                  <title>Om mig - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Om mig"
                  />
                </Helmet>
                <OmMig />
              </>
            }
          />
          <Route
            path="/Malerier"
            element={
              <>
                <Helmet>
                  <title>Malerier - Kell Jarner Art</title>
                  <meta name="description" content="Udforsk malerier" />
                </Helmet>
                <Malerier />
              </>
            }
          />
          <Route
            path="/Kontakt"
            element={
              <>
                <Helmet>
                  <title>Kontakt os - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Kontakt side"
                  />
                </Helmet>
                <Kontakt />
              </>
            }
          />
          <Route
            path="/Plakater"
            element={
              <>
                <Helmet>
                  <title>Plakater - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Plakater til salg"
                  />
                </Helmet>
                <Plakater />
              </>
            }
          />
          <Route
            path="/GalleriKrasbørstig"
            element={
              <>
                <Helmet>
                  <title>GalleriKrasbørstig - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Læs om galleriet Krasbørstig"
                  />
                </Helmet>
                <GalleriKrasbørstig />
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
