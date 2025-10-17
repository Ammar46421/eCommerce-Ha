import { useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import SignIn from "./components/signin/SignIn.jsx"; // ✅ Import your SignIn component
import Footer from "./components/footer/Footer.jsx";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar /> {/* Always visible */}

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/signin" element={<SignIn />} />
        {/* You can add more routes below */}
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
