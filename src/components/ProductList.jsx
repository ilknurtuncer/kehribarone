import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/productData";
import { useLanguageContext } from "../context/LanguageContext";

const ProductList = () => {
  const { translations } = useLanguageContext();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {translations.productList?.title || "Our Products"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
