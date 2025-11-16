import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

const brands = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className="my-20 text-center w-10/12 mx-auto">
      <h1 className="font-bold text-2xl text-secondary mb-10">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brands.map((b, ind) => (
          <SwiperSlide key={ind}>
            <img src={b} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
