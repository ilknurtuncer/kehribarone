import React from "react";
import ProductCard from "./ProductCard";
import productData from "../../data/productData";
import { useTranslation } from "react-i18next"; // useTranslation hook'u ile çeviri 

const ProductList = () => {
  const { t } = useTranslation(); // Çeviri hook'u

  return (
    <div className="p-6 sm:p-8 md:p-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-yellow-900 font-bold mb-6 text-center">
        {t("productList.title")} {/* Çeviri anahtarı */}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
