import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import CondRendering from "./Components/CondRendering.jsx";
import ProductRedering from "./Components/ProductRedering.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      {/* <CondRendering /> */}
      <Navbar />
      <ProductRedering />
      <Footer />
    </>
  );
}

export default App;
