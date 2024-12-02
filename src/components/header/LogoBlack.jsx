import React from "react";
import { Link } from "react-router-dom";

const LogoBlack = () => {
  return (
    <div className="logo">
      <Link to="/"> {/* Ana sayfaya yönlendirme */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          alt="Kehribar Logo"
          className="w-32 h-auto" // Gerekirse logo için boyut ayarları
        />
      </Link>
    </div>
  );
};

export default LogoBlack;
