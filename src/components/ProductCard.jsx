import React from "react";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageContext";

const ProductCard = ({ product }) => {
  const { translations } = useLanguageContext(); // Translations context'ini kullan
console.log(translations);
  return (
    <div className="border border-inherit border-orange-200 rounded shadow-md p-10 m-8">
      <img
        src={`/images/products/${product.image}`} // productData'dan alınan resim yolu
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">
        {translations.productCard?.description || product.description}
      </p>
      <p className="text-yellow-600 font-bold">{product.price}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
        {translations.productCard?.details || "View Details"}
      </Link>
    </div>
  );
};

export default ProductCard;
