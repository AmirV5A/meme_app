import React, { useRef, useState } from 'react';

 import image_1 from "./assets/1.png";
 import image_2 from "./assets/2.png";
 import image_3 from "./assets/3.png";
 import image_4 from "./assets/4.png";
 import image_5 from "./assets/5.png";
 import image_6 from "./assets/6.png";
 import image_7 from "./assets/7.png";
 import image_8 from "./assets/8.png";
 import image_9 from "./assets/9.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SilderBar.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




function SilderBar() {
  



  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img src={image_1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_7} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_8} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image_9} alt="" /></SwiperSlide>
    </Swiper>
  </>
  )
  }
export default SilderBar