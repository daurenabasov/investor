import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";
import { sliderIcons } from "../../../../Constants/slider";

import s from "./Company.module.scss";
import "./Company.css";

const Company = () => {
  return (
    <>
      <div className={s.slide} id="container">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={50}
          freeMode={true}
          onAutoplay={() => true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {sliderIcons.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.icon} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Company;
