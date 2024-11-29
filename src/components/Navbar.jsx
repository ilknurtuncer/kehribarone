import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-yellow-700 text-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">Kehribar</Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Ana Sayfa</Link>
          <Link to="/products" className="hover:underline">Ürünler</Link>
          <Link to="/contact" className="hover:underline">İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
