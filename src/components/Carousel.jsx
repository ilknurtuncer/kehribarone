import React, { startTransition } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; // Modülleri doğru yerden içe aktar

import 'swiper/css';
import 'swiper/css/navigation';

import carouselData from '../data/carouselData';

const Carousel = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]} // Modülleri kullanıma al
    >
      {carouselData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
