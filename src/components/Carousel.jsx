import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      image: "/images/carousel/amber1.jpg",
      title: t("carousel.title1"), // Çeviriler burada alınır
      subtitle: t("carousel.subtitle1"),
    },
    {
      id: 2,
      image: "/images/carousel/amber2.jpg",
      title: t("carousel.title2"),
      subtitle: t("carousel.subtitle2"),
    },
    {
      id: 3,
      image: "/images/carousel/amber3.jpg",
      title: t("carousel.title3"),
      subtitle: t("carousel.subtitle3"),
    },
  ];

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className=" w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
