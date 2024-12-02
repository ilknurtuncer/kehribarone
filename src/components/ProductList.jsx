import React from 'react';
import productData from '../data/productData';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="container bg-orange-100 mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Ürünlerimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
