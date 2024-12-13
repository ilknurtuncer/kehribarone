
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductCard from './components/ProductCard';

import Navbar from "./components/header/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import Kolye from "./components/products/Kolye";
import Bileklik from "./components/products/Bileklik";
import Tesbih from "./components/products/Tesbih";
import { useTranslation } from 'react-i18next';
import { TranslationProvider } from './context/TranslationContext';


const App = () => {
  const { t } = useTranslation();
  return (
    <TranslationProvider>

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
          </Routes>
        </div>
        {/* <ProductCard /> */}
        <Footer />
      </Router>
      </TranslationProvider>
  );
};

export default App;
