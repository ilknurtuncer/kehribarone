import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/productData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) return <div>Ürün Bulunamadı</div>;

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full max-w-md" />
      <p>{product.description}</p>
      <p className="text-yellow-600 font-bold">{product.price}</p>
    </div>
  );
};

export default ProductDetail;
