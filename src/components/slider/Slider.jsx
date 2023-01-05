import React from "react";
import Slider from "react-slick";
import style from "./slider.module.css";
import Banner from "../banner/Banner";

const SliderAbout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
        <Banner />
        </div>
        <div>
        <Banner />
        </div>
        <div>
        <Banner />
        </div>
    </Slider>
    </div>
  );
};

export default SliderAbout;
