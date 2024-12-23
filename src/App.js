import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import Kolye from "./components/products/Kolye";
import Bileklik from "./components/products/Bileklik";
import Tesbih from "./components/products/Tesbih";
import { LanguageProvider } from './context/LanguageContext'; 
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <div className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bileklik" element={<Bileklik />} />
            <Route path="/kolye" element={<Kolye />} />
            <Route path="/tesbih" element={<Tesbih />} />
            <Route path="/about-me" element={<AboutMe/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;
