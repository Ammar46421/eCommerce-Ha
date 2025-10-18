import { useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/navbar/Navbar.jsx";
import SignIn from "./components/signin/SignIn.jsx"; 
import HeroSection from "./components/hero/HeroSection.jsx"; // ✅ Import HeroSection

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar /> {/* Always visible */}

      <Routes>
        {/* Home page */}
        <Route path="/" element={<HeroSection />} />

        {/* SignIn page */}
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
