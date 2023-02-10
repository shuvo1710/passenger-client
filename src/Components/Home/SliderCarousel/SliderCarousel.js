import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPeopleArrows, FaStar } from "react-icons/fa";
import SliderCarouselStar from "../../SliderCarouselStar";

const SliderCarousel = ({ carousels }) => {
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper my-16"
      >
        {carousels.map((slide) => (
          <SwiperSlide>
            <div className="md:my-10 overflow-hidden  relative">
              <Link to={`/perfectHoliday/${slide._id}`}>
                <img
                  src={slide.picture}
                  className=" w-full h-[270px] justify-center items-center  rounded   aspect-square lg:hover:scale-105  transform transition  duration-500 hover:duration-500 overflow-hidden"
                  alt=""
                />
              </Link>

              <div className="bg-gray-200 -mt-1 z-50">
                <div className="grid grid-cols-2 p-4">
                  <div className="flex gap-3">
                    <FaPeopleArrows></FaPeopleArrows>
                    <p className="text-sm lg:text-md-2xl">{slide.man}</p>
                  </div>
                  <div className="flex gap-3">
                    <FaLocationArrow></FaLocationArrow>
                    <p className="text-sm lg:text-md-2xl hover:underline ">
                      {slide.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className=" bg-white shadow p-3">
                <p className="md:text-sm lg:text-2xl font-bold">{slide.name}</p>
                <p className="text-sm hidden lg:block">
                <span className="font-semibold ">Details: </span>
                   {slide.details.slice(0, 50)}.....
                </p>
                <div className="gap-4 my-1">
                  <p className="text-lg justify-end font-semibold">
                    {" "}
                    price: {slide.balance}
                  </p>
                  <div className="hidden lg:flex  gap-2 text-sm items-center ">
                    <span className="font-semibold ">Rating:</span>
                    <SliderCarouselStar
                      rating={slide.rating}
                    ></SliderCarouselStar>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCarousel;
