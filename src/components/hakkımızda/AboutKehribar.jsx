import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Using react-icons for check icon
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook for translations

const AboutKehribar = () => {
  const { t } = useTranslation(); // useTranslation hook to get translations
  const navigate = useNavigate();

  const handleYoutubeClick = () => {
    // Redirect to YouTube
    window.open("https://www.youtube.com/results?search_query=amber+benefits", "_blank");

    // navigate("/some-path"); // navigate i kullanmak istediğimde yönlendirilmek istenen yol

  };

  return (
    <div className="flex flex-col md:flex-row items-center p-12 gap-8">
      {/* Left side - Amber image and YouTube button */}
      <div className="relative w-full md:w-1/2">
        <img
          src="/images/carousel/amber4.jpg" // Get amber image from the public folder
          alt={t("aboutAmber.imageAlt")} // Use translation for alt text
          className="w-full h-auto rounded-lg shadow-md"
        />
        {/* YouTube button */}
        <button
          onClick={handleYoutubeClick}
          className="absolute bottom-4 right-4 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700"
        >
          <img
            src="/images/logo/youtube.png"
            alt="YouTube"
            className="w-12 h-12"
          />
        </button>
      </div>
       {/* //*------------------------------------------------------------------
      <button onClick={handleButtonClick}>Go to Some Path</button> //* navigate i kullanmak istediğimde kullanılacak
       //*--------------------------------- */}

      {/* Right side - About heading and amber's benefits */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">{t("aboutAmber.title")}</h2> {/* Translated title */}
        <p className="text-lg text-gray-700 mb-6">
          {t("aboutAmber.description")} {/* Translated description */}
        </p>
        <ul className="space-y-4 text-left">
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            {t("aboutAmber.benefit1")}
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            {t("aboutAmber.benefit2")}
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            {t("aboutAmber.benefit3")}
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            {t("aboutAmber.benefit4")}
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            {t("aboutAmber.benefit5")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutKehribar;
