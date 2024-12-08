import React from 'react';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="relative bg-orange-100 top-2">
      <Carousel />
      <ProductList />
    </div>
  );
};

export default Home;
