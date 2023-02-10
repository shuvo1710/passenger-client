import { useQuery } from "@tanstack/react-query";
import React from "react";
import MostVisitedAreaCarousel from "../TravelReviews/MostVisitedAreaCarousel";
const MostVisited = () => {

  const {data:mostVisited=[]}=useQuery({
    queryKey:[],
    queryFn: async()=>{
      const res=await fetch('http://localhost:5000/topVisitedArea')
      const data=await res.json()
      return data

    }
  })

 

  return (
    <div className="my-4 md:my-20 container mx-auto">
      <div className="justify-center text-center ">
        <p className="text-2xl md:text-5xl text-sky-300  font-bold ">Top Visited Area</p>
        
        <p className="w-1/2 mx-auto mt-4 font-semibold">
        The Top {mostVisited?.length} Most Visited Cities In The World.
        </p>
      </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 my-8">
          {
            mostVisited.map(visited=> <MostVisitedAreaCarousel visited={visited}></MostVisitedAreaCarousel>)
          }
        </div>
      
    </div>
  );
};

export default MostVisited;
