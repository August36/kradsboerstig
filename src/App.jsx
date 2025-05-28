import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import Hero from "./components/Hero";
import OmMig from "./pages/OmMig";
import Malerier from "./pages/Malerier";
import Kontakt from "./pages/Kontakt";
import Plakater from "./pages/Plakater";
import HuleMalerier from "./pages/HuleMalerier";
import Macabre from "./pages/Macabre";
import NarrativRaakunst from "./pages/NarrativRaakunst";
import GalleriKrasbørstig from "./pages/GalleriKrasbørstig";
import MenInBlack from "./pages/MenInBlack";
import FugleMennesker from "./pages/FugleMennesker";
import Skønhed from "./pages/Skønhed";
import Layout from "./components/Layout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ExhibitionsContainer from "./components/ExhibitionsContainer";

function App() {
  return (
    <Router>
      <Layout>
        {/* Appens routing */}
        <Routes>
          {/* Offentlige sider */}
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
                <Hero />
                <ExhibitionsContainer limit={1}/>

                </>
            }
          />
          <Route
            path="/OmMig"
            element={
              <>
                <Helmet>
                  <title>Om mig - Kell Jarner Art</title>
                  <meta name="description" content="Om mig" />
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
                  <meta name="description" content="Kontakt side" />
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
                  <meta name="description" content="Plakater til salg" />
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
            path="/Macabre"
            element={
              <>
                <Helmet>
                  <title>Macabre - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="View our Macabre art collection."
                  />
                </Helmet>
                <Macabre />
              </>
            }
          />
          <Route
            path="/NarrativRaakunst"
            element={
              <>
                <Helmet>
                  <title>Narrativ Råkunst - Kell Jarner Art</title>
                  <meta name="description" content="NarrativRaakunst" />
                </Helmet>
                <NarrativRaakunst />
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
          <Route
            path="/Skønhed"
            element={
              <>
                <Helmet>
                  <title>Skønhed - Kell Jarner Art</title>
                  <meta
                    name="description"
                    content="Skønhed"
                  />
                </Helmet>
                <Skønhed />
              </>
            }
          />

          {/* Admin Login */}
          <Route path="/admin" element={<Admin />} />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
