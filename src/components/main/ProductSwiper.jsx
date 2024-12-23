import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import productData from "../../data/productData";

const ProductSwiper = () => {
  return (
    <div className="bg-amber-100 container mx-auto py-8 px-52">
      <h2 className="text-center text-2xl font-bold mb-6">Our Products</h2>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="product-swiper"
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id} className="flex flex-col items-center">
            <img
              src={`/images/products/${product.image}`}
              alt={product.name}
              className="rounded-lg w-52 h-52 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name.en}</h3>
            <p className="text-yellow-600 font-bold">{product.price.en}</p>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="swiper-button-prev !text-gray-400 !hover:text-gray-600"></div>
        <div className="swiper-button-next !text-gray-400 !hover:text-gray-600"></div>
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
