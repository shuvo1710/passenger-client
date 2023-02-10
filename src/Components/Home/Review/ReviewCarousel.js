import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Style.css";

// import required modules
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

const ReviewCarousel = ({reviews}) => {
   
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
            delay: 3000,
            disableOnInteraction: false,
          }}

        
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          className="mySwiper w-full md:w-2/3"
        >
         {
            reviews?.map(review=>  <SwiperSlide className="">
           <div className='justify-center items-center text-center'>
           <div className='flex justify-center rounded-full my-3'>
           <img src={review.picture} className=' w-16 h-16 md:w-40 md:h-40 rounded-full'  alt="" />
           </div>
           <div className='text-center justify-center items-center flex'>
           <p className='text-sm w-1/2 md:w-2/3'>{review.details}</p>
           </div>
           <h1 className='text-2xl font-mono font-bold mt-4'>{review.name}</h1>
           </div>
            </SwiperSlide>)
         }
  
        </Swiper>
  
       
      </div>
    );
};

export default ReviewCarousel;