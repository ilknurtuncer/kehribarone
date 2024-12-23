import React from 'react';
import Carousel from '../components/main/Carousel';

import AboutKehribar from '../components/hakkımızda/AboutKehribar';

import ProductList from '../components/main/ProductList';
import ProductSwiper from '../components/main/ProductSwiper';

const Home = () => {
  return (
    <div className="relative bg-amber-100 mt-0 ">
      <Carousel />
      <ProductSwiper/>
      <ProductList/>
      
      <AboutKehribar/>
    </div>
  );
};

export default Home;