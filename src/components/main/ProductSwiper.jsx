import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import productData from "../../data/productData";
import { useTranslation } from "react-i18next";

const ProductSwiper = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="bg-amber-100 container mx-auto py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-center text-xl sm:text-2xl font-bold mb-6">
        {t("Products.title")} {/* Dil değiştirmeye duyarlı başlık */}
      </h2>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
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
              alt={product.name[i18n.language]} // Dil değiştirmeye duyarlı
              className="rounded-lg w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60 h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 object-cover mb-2"
            />
            <h3 className="text-base sm:text-lg font-semibold">
              {product.name[i18n.language]} {/* Dil değiştirmeye duyarlı */}
            </h3>
            <p className="text-yellow-600 font-bold text-sm sm:text-base">
              {product.price[i18n.language]} {/* Dil değiştirmeye duyarlı */}
            </p>
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
