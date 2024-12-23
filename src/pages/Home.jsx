import React from 'react';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';
import AboutKehribar from '../components/hakkımızda/AboutKehribar';
import ProductSwiper from '../components/ProductSwiper';

const Home = () => {
  return (
    <div className="relative bg-amber-100 mt-0 ">
      <Carousel />
      <ProductSwiper/>
      <ProductList />
      
      <AboutKehribar/>
    </div>
  );
};

export default Home;