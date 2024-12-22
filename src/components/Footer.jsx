import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Alanı */}
          <div className="ml-10 mb-4 md:mb-0 flex flex-col items-center">
            <img 
              src="/images/logo/logo1.png" 
              alt="Logo" 
              className="w-40 h-40 mr-2" 
            />
            <span className="text-3xl font-bold text-orange-400 mt-3">
              Aureus
            </span>
          </div>

          {/* Quick Links */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg text-red-300 font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left mr-20">
            <h2 className="text-lg text-red-300 font-bold mb-5">Follow Us</h2>
            <div className="space-y-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 block"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" /> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 block"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" /> Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 block"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            © 2024 Aureus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
