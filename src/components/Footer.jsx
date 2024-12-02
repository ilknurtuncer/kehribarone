import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Üst Bölüm: Bağlantılar ve Sosyal Medya */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Bağlantılar */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Hızlı Bağlantılar</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Ürünler
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h2 className="text-lg font-bold mb-2">Bizi Takip Edin</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" /> Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" /> Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Alt Bölüm: Telif Hakkı */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            © 2024 Kehribar. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
