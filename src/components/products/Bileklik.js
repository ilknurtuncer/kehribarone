import React from "react";

const Bileklik = () => {
  const products = [
    { id: 1, name: "Kehribar Bileklik", image: "/images/products/bileklik1.jpg", price: "300₺" },
    { id: 2, name: "Amber Bileklik", image: "/images/products/bileklik2.jpg", price: "450₺" },
  ];

  return (
    <div className="py-16 px-4 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Bileklik</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-teal-500 text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bileklik;
