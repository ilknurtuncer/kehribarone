import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation(); // Çevirileri almak için hook

  // Seçilen dile göre ürün verileri
  const productName = product.name[i18n.language];
  const productDescription = product.description[i18n.language];
  const productPrice = product.price[i18n.language];

  return (
    <div className="bg-amber-300 rounded shadow-md p-4 sm:p-6 md:p-8 m-4 sm:m-6 md:m-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center">
      <img
        src={`/images/products/${product.image}`}
        alt={productName}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded"
      />
      <h3 className="text-lg sm:text-xl font-bold mt-2 text-center">{productName}</h3>
      <p className="text-gray-700 text-sm sm:text-base text-center">{productDescription}</p>
      <p className="text-yellow-600 font-bold text-lg sm:text-xl">{productPrice}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline mt-2 sm:mt-4">
        {t("productCard.details")}
      </Link>
    </div>
  );
};

export default ProductCard;
