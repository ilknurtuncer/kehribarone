import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import menuData from "../../data/menuData";

const Navbar = () => {
  const [dropdownState, setDropdownState] = useState({
    products: false,
    language: false,
  });
  const [isSticky, setIsSticky] = useState(false);

  const dropdownRefs = {
    products: useRef(null),
    language: useRef(null),
  };

  const navbarItems = menuData?.navbar || [];
  const languageOptions = menuData?.languages || [];

  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 0);
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

  return (
    <nav
      className={`bg-orange-400 bg-opacity-70 shadow-md fixed w-full h-20 z-20 transition-all duration-300 ${
        isSticky ? "top-0" : "top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto my-5 px-4 py-2 flex justify-between items-center">
        {/* Left side of the Navbar (Home, Products Dropdown, About, Contact) */}
        <div className="flex space-x-8">
          {/* Home Link */}
          <Link
            to="/"
            className="text-gray-700 text-xl hover:text-blue-500"
          >
            Home
          </Link>

          {/* Products Dropdown */}
          {navbarItems.map((menu, index) => (
            menu.slug === 'products' && (
              <div
                className="relative"
                key={index}
                ref={dropdownRefs.products}
              >
                <Link
                  to={menu.slug}
                  className="text-gray-700 text-xl hover:text-blue-500"
                >
                  {menu.title}
                </Link>
                {menu["sub-menu"] && (
                  <>
                    <button
                      onClick={() => toggleDropdown("products")}
                      className="text-gray-700 text-xl hover:text-blue-500 focus:outline-none ml-2"
                    >
                      ▼
                    </button>
                    {dropdownState.products && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                        {menu["sub-menu"].map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`/${menu.slug}/${subItem.slug}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          ))}

          {/* About Link */}
          <Link
            to="/about"
            className="text-gray-700 text-xl hover:text-blue-500"
          >
            About
          </Link>

          {/* Contact Link */}
          <Link
            to="/contact"
            className="text-gray-700 text-xl hover:text-blue-500"
          >
            Contact
          </Link>
        </div>

        {/* Language Dropdown */}
        <div className="relative" ref={dropdownRefs.language}>
          <button
            onClick={() => toggleDropdown("language")}
            className="text-gray-700 text-xl hover:text-blue-500 focus:outline-none"
          >
            Dil Seçenekleri
          </button>
          {dropdownState.language && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              {languageOptions.map((language, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {language.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
