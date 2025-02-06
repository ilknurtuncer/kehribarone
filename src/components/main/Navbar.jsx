import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import productData from "../../data/productData";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [dropdownState, setDropdownState] = useState({
    products: false,
    language: false,
  });
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRefs = {
    products: useRef(null),
    language: useRef(null),
  };

  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleClickOutside = useCallback((event) => {
    Object.keys(dropdownRefs).forEach((key) => {
      if (
        dropdownRefs[key].current &&
        !dropdownRefs[key].current.contains(event.target)
      ) {
        setDropdownState((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={`bg-amber-200 bg-opacity-70 shadow-md fixed w-full z-20 transition-all duration-300 ${isSticky ? "top-0" : "top-0"}`}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="/images/logo/logo1.png" alt="Logo" className="h-12 shadow-inner rounded" />
          </Link>

          {/* Mobil Menü Butonu */}
          <button className="md:hidden text-gray-700 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className={`md:flex md:space-x-8 ${isMenuOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-amber-200 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}> 
          <Link to="/" className="block md:inline text-gray-700 text-xl hover:text-amber-500">{t("navbar.home")}</Link>
          <div className="relative" ref={dropdownRefs.products}>
            <button onClick={() => toggleDropdown("products")} className="text-gray-700 text-xl hover:text-amber-500">
              {t("navbar.products")}
            </button>
            {dropdownState.products && (
              <div className="absolute left-0 mt-2 w-48 bg-amber-100 bg-opacity-85 rounded shadow-lg">
                {productData.map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`} className="block px-4 py-2 text-gray-700 hover:bg-orange-300">
                    {product.name[i18n.language] || product.name.en}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="block md:inline text-gray-700 text-xl hover:text-amber-500">{t("navbar.about")}</Link>
          <Link to="/contact" className="block md:inline text-gray-700 text-xl hover:text-amber-500">{t("navbar.contact")}</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+123456789" className="text-gray-700 text-lg font-semibold hover:text-amber-500 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> +123 456 789
          </a>
          <a href="https://www.google.com/maps?q=Your+Address" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg font-semibold hover:text-amber-500 flex items-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> Your Address
          </a>
        </div>

        <div className="relative">
          <button onClick={() => toggleDropdown("language")} className="text-gray-700 text-xl hover:text-amber-500 flex items-center">
            <img src={`/images/flags/${i18n.language}.png`} alt={i18n.language} className="w-6 h-4 mr-2" />
            {i18n.language.toUpperCase()}
          </button>
          {dropdownState.language && (
            <div className="absolute right-0 mt-2 w-48 bg-amber-100 bg-opacity-85 rounded shadow-lg">
              {["en", "de", "pl"].map((lang) => (
                <div key={lang} className="flex items-center px-4 py-2 cursor-pointer hover:bg-orange-300" onClick={() => switchLanguage(lang)}>
                  <img src={`/images/flags/${lang}.png`} alt={lang} className="w-6 h-4 mr-2" />
                  {lang.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
