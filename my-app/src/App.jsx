import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
// import Cart from "./components/cart/Cart.jsx"
import HeroSection from "./components/HeroSection/HeroSection.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      {/* <Cart/> */}
      <HeroSection/>
    </div>
  );
}

export default App;
