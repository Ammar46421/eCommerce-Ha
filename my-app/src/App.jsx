import Navbar from "./components/navbar/Navbar.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import HealthDashboard from "./components/dashboard/HealthDashboard.jsx";
import Footer from "./components/footer/FooterBar.jsx";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HealthDashboard /> {/* Directly below HeroSection */}
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
