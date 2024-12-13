import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // useTranslation import edildi
import productData from "../../data/productData";

const Navbar = () => {
  const { t, i18n } = useTranslation(); // useTranslation ile t ve i18n alındı
  const [dropdownState, setDropdownState] = useState({
    products: false,
    language: false,
  });
  const [isSticky, setIsSticky] = useState(false);

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

  const handleClickOutside = (event) => {
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang); // Dil değişimi
  };

  return (
    <nav
      className={`bg-orange-300 bg-opacity-70 shadow-md fixed w-full z-20 transition-all duration-300 ${
        isSticky ? "top-0" : "top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img src="/images/logo/logo.png" alt="Logo" className="h-12" />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 text-xl hover:text-blue-500">
              {t("navbar.home")}
            </Link>
            <div className="relative" ref={dropdownRefs.products}>
              <button
                onClick={() => toggleDropdown("products")}
                className="text-gray-700 text-xl hover:text-blue-500"
              >
                {t("navbar.products")}
              </button>
              {dropdownState.products && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  {productData.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.id}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="text-gray-700 text-xl hover:text-blue-500">
              {t("navbar.about")}
            </Link>
            <Link to="/contact" className="text-gray-700 text-xl hover:text-blue-500">
              {t("navbar.contact")}
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("language")}
              className="text-gray-700 text-xl hover:text-blue-500"
            >
              {i18n.language.toUpperCase()}
            </button>
            {dropdownState.language && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                {["en", "de", "pl"].map((lang) => (
                  <div
                    key={lang}
                    className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => switchLanguage(lang)}
                  >
                    {lang.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Telefon ve Adres */}
          <div className="hidden md:flex flex-col text-gray-700 text-lg font-semibold">
            <a href="tel:+123456789" className="hover:text-blue-600">
              📞 +123 456 789
            </a>
            <a
              href="https://www.google.com/maps?q=Your+Address"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              🏠 Your Address
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
