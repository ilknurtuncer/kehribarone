import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // useTranslation hook'u ile çeviri alıyoruz

const ProductCard = ({ product }) => {
  const { t } = useTranslation(); // Çevirileri almak için hook

  return (
    <div className="border border-inherit border-orange-200 rounded shadow-md p-8 m-8">
      <img
        src={`/images/products/${product.image}`} // productData'dan alınan resim yolu
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-yellow-600 font-bold">{product.price}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
        {t("productCard.details")} {/* Çeviri anahtarı*/}
      </Link>
    </div>
  );
};

export default ProductCard;
