import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Alanı */}
          <div className="mb-6 md:mb-0 flex flex-col items-center p-3">
            <img 
              src="/images/logo/logo1.png" 
              alt="Logo" 
              className="w-32 h-32 md:w-40 md:h-40" 
            />
            <span className="text-2xl md:text-3xl font-bold text-orange-400 mt-3">
              Aureus
            </span>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-lg text-orange-400 font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange-200">Home</a>
              </li>
              <li>
                <a href="/products" className="hover:text-orange-200">Products</a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-200">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h2 className="text-lg text-orange-400 font-bold mb-5">Follow Us</h2>
            <div className="flex flex-col space-y-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-200 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-200 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-200 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm text-orange-200">
            © 2024 Aureus. All rights reserved. | 
            <a href="/about-me" className="text-orange-400 hover:text-orange-200">
              Ilknur Tuncer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
