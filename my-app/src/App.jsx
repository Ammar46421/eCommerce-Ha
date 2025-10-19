import Navbar from "./components/navbar/Navbar.jsx";
import SignIn from "./components/signin/SignIn.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import HealthDashboard from "./components/dashboard/HealthDashboard";
import ManualVitals from "./components/dashboard/ManualVitals"; // ✅ ManualVitals import
import Footer from "./components/footer/FooterBar";
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
              <HealthDashboard />
            </>
          }
        />

        <Route path="/signin" element={<SignIn />} />

        {/* Manual Vitals page */}
        <Route path="/manual-vitals" element={<ManualVitals />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
