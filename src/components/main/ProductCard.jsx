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
    <div className="border-inherit bg-amber-300  rounded shadow-md p-8 m-8">
      <img
        src={`/images/products/${product.image}`}
        alt={productName}
        className="w-full h-56 object-cover"
      />
      <h3 className="text-xl font-bold mt-2">{productName}</h3>
      <p className="text-gray-700">{productDescription}</p>
      <p className="text-yellow-600 font-bold">{productPrice}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
        {t("productCard.details")}
      </Link>
    </div>
  );
};

export default ProductCard;
