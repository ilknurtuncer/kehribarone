import React from 'react';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';
import AboutKehribar from '../components/hakkımızda/AboutKehribar';

const Home = () => {
  return (
    <div className="relative bg-orange-100 top-2">
      <Carousel />
      <ProductList />
      <AboutKehribar/>
    </div>
  );
};

export default Home;
