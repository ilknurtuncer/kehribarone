import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded shadow-md p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-yellow-600 font-bold">{product.price}</p>
      <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
        Detayları Gör
      </Link>
    </div>
  );
};

export default ProductCard;
