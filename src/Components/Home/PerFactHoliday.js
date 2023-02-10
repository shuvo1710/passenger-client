import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Loader } from "../../Loading/Loading";
import SliderCarousel from "./SliderCarousel/SliderCarousel";

const PerFactHoliday = () => {


  const {data: carousels=[], isLoading}=useQuery({
    queryKey:["perfectHoliday"],
    queryFn: async()=>{
      const res=await fetch("http://localhost:5000/perfectHoliday")
      const data=await res.json()
      return data;
    }
    
  })

if(isLoading){
  return <Loader></Loader>
}



  return (
    <div className="relative">
     
      <div className=" container mx-auto justify-center items-center">
      <div className="pt-10 ">
        <h1 className="text-3xl lg:text-2xl text-center font-mono font-bold text-white mt-4">
          Plan The
        </h1>
        <h1 className="text-2xl lg:text-3xl text-center font-bold text-white">
          Perfect Holiday
        </h1>
        
      </div>
        <SliderCarousel carousels={carousels}></SliderCarousel>
      </div>
    </div>
  );
};

export default PerFactHoliday;
