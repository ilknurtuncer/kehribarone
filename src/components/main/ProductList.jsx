import React from "react";
import ProductCard from "./ProductCard";
import productData from "../../data/productData";
import { useTranslation } from "react-i18next"; // useTranslation hook'u ile çeviri alıyoruz

const ProductList = () => {
  const { t } = useTranslation(); // Çeviri hook'u

  return (
    <div className="p-12">
      <h1 className="text-5xl text-yellow-900 font-bold mb-4 text-center">
        {t("productList.title")} {/* Çeviri anahtarı */}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
