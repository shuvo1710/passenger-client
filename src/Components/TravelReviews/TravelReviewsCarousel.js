import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPeopleArrows, FaStar } from "react-icons/fa";

const TravelReviewsCarousel = ({reviews}) => {
    return (
        <div>
        <Swiper
          freeMode={true}
          loop={true}
          loopFillGroupWithBlank={true}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
  
            1441: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper my-24 "
        >
          {reviews.map((review) => (
            <SwiperSlide>
            <div className="md:flex m-8 gap-4  bg-white rounded-lg p-8 ">
                    <div className='w-20 h-20'>
                      <img className='rounded-full' src={review?.picture} alt="" />
                    </div>
    
                    <div>
                      <h1 className="text-lg font-bold text-black ">
                        {review?.name}
                      </h1>
    
                      <div className="flex items-center text-black my-4">
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                       <FaStar></FaStar>
                        
                      </div>
                      <p className="text-black">
                      {review?.details}
                      </p>
                    </div>
                  </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default TravelReviewsCarousel;