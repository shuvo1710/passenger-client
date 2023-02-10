import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

import SideNav from "../Home/SideNav";
import video from '../../Resource/subscrib.mp4'


const Carousel = () => {
  return (
    <div>
      <Swiper
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper lg:h-[70vh]" >
        <SwiperSlide className="">
        <div className="relative h-[300px] md:h-[400px] lg:h-[800px]">
        <img
          src="https://i.ibb.co/VCJp7sg/pexels-kimberly-mcneilus-2480626.jpg"
          className="absolute inset-0 object-center w-full h-full"
          alt=""
        />
        <div className=" h-full bg-gray-700 bg-opacity-75 justify-center relative flex items-center">
          <div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
                Bali
                <br />
                Indonesia
                </h1>

                

              </div>
            </div>
          </div>
        </div>
      </div>
        </SwiperSlide>


        <SwiperSlide className="">
        <div className="relative h-[300px] md:h-[400px] lg:h-[800px]">
        <img
          src="https://i.ibb.co/th3c7wN/pexels-dominika-gregu-ov-672532-1.jpg"
          className="absolute inset-0 object-center w-full h-full"
          alt=""
        />
        <div className=" h-full bg-gray-700 bg-opacity-75 justify-center relative flex items-center">
          <div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
               London
                <br />
                England
                </h1>

                

              </div>
            </div>
          </div>
        </div>
      </div>
        </SwiperSlide>


        <SwiperSlide className="">
        <div className="relative h-[300px] md:h-[400px] lg:h-[800px]">
        <img
          src="https://i.ibb.co/xCrCvYh/pexels-alina-gheordunescu-12284990.jpg"
          className="absolute inset-0 object-center w-full h-full"
          alt=""
        />
        <div className=" h-full bg-gray-700 bg-opacity-75 justify-center relative flex items-center">
          <div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
                the blue mosque
                <br />
                Turkey
                </h1>

                

              </div>
            </div>
          </div>
        </div>
      </div>
        </SwiperSlide>

        <SwiperSlide className="">
        <div className="relative h-[300px] md:h-[400px] lg:h-[800px]">
        <img
          src="https://i.ibb.co/rM8LDNd/pexels-sudipta-mondal-1603650.jpg"
          className="absolute inset-0 object-center w-full h-full"
          alt=""
        />
        <div className=" h-full bg-gray-700 bg-opacity-75 justify-center relative flex items-center">
          <div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
                Taj Mahal
                <br />
                India
                </h1>

                

              </div>
            </div>
          </div>
        </div>
      </div>
        </SwiperSlide>

     
      </Swiper>

      <div className="absolute z-50 hidden lg:block ">
        <SideNav></SideNav>
      </div>
    </div>
  );
};

export default Carousel;
