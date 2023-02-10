import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay,FreeMode, Navigation, Thumbs } from "swiper";
const AreaCarousel = ({pictures}) => {

  
    return (
        <div>
       <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
       
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay,FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          pictures.map(picture=><SwiperSlide>
            <img src={picture} alt='' />
          </SwiperSlide>)
        }
       
        
      </Swiper>
      

      
    </div>
    );
};

export default AreaCarousel;