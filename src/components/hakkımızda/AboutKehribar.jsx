import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Tik işareti için react-icons kullanıyoruz
import { useNavigate } from "react-router-dom";

const AboutKehribar = () => {
  const navigate = useNavigate();

  const handleYoutubeClick = () => {
    // YouTube'a yönlendirme
    window.open("https://www.youtube.com/results?search_query=amber+benefits", "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-12 gap-8">
      {/* Sol taraf - Kehribar resmi ve YouTube butonu */}
      <div className="relative w-full md:w-1/2">
        <img
          src="/images/carousel/amber4.jpg" // public klasöründen kehribar resmini alıyoruz
          alt="Kehribar"
          className="w-full h-auto rounded-lg shadow-md"
        />
        {/* YouTube butonu */}
        <button
          onClick={handleYoutubeClick}
          className="absolute bottom-4 right-4 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700"
        >
          <img
            src="/images/logo/youtube.png"
            alt="YouTube"
            className=" w-12 h-12"
          />
        </button>
      </div>

      {/* Sağ taraf - Hakkımızda başlığı ve kehribarın faydaları */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">Hakkımızda</h2>
        <p className="text-lg text-gray-700 mb-6">
          Kehribar, doğal bir taş olup sağlık ve ruhsal dengeyi artırdığına inanılmaktadır. İşte kehribarın faydalarından bazıları:
        </p>
        <ul className="space-y-4 text-left">
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            Stresi azaltmaya yardımcı olur.
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            Vücuda enerji verir.
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            Bağışıklık sistemini güçlendirir.
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            Cilt sağlığını iyileştirir.
          </li>
          <li className="flex items-center text-lg text-gray-800">
            <FaCheckCircle className="text-yellow-600 mr-3" />
            Doğal bir ağrı kesici olarak kullanılabilir.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutKehribar;
