import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import FourIconCards from "./FourIconCards";
import PerFactHoliday from "./PerFactHoliday";
import "aos/dist/aos.css";
import ChoseYourPerfectHoliday from "./ChoseYourPerfectHoliday";
import MostVisited from "../MostVisited/MostVisited";
import SearchCard from "../SearchCard/SearchCard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../../Loading/Loading";
import Test from "../../Test/Test";


const Home = () => {
  // const [tourism, setTourism] = useState([]);
  const searchRef = useRef();
  const searcTourism = useRef();
  const [search, setSearch] = useState("");
  const [searchTourism, setSearchTourism] = useState("");

  const { data: searches = [], isLoading } = useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/allcountry?search=${search}`
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: tourism = [] } = useQuery({
    queryKey: ["tourismArea", searchTourism],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/tourismArea?search=${searchTourism}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchRef.current.value);
  };

  const tourismSearch = (event) => {
    event.preventDefault();
    setSearchTourism(searcTourism.current.value);
  };

  return (
    <div className="">
      <div className=" block">
        <Carousel></Carousel>
      </div>

      {/* for show searching data  */}
      <div className="container mx-auto my-8 ">
        <div className="container mx-auto justify-center items-center text-center mt-10">
          <h1 className="font-mono font-bold text-3xl text-sky-500 ">
            Search Your
          </h1>
          <h1 className="font-mono font-bold text-2xl md:text-5xl md:my-3 text-[#6c6d72f5] ">
            Favourite Country
          </h1>

          <div className="input-group justify-center items-center text-center p-4 md:p-0">
            <input
              type="text"
              ref={searchRef}
              placeholder="Type your Country......"
              className="input input-bordered w-full  md:w-[500px]"
            />
            <button
              onClick={handleSearch}
              className="btn btn-square bg-sky-500 border-sky-500 hover:bg-sky-500 hover:border-sky-500 w-4/12 md:w-1/12 text-black"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 my-8 p-4">
          {searches?.map((search) => (
            <SearchCard search={search} key={search._id}></SearchCard>
          ))}
        </div>
      </div>

      <div className="p-4 bg-gray-50">
        <div className="container mx-auto  my-16 ">
          <FourIconCards></FourIconCards>
        </div>
      </div>

      {/* Tourism Area  */}

      <div className="container mx-auto my-8 ">
        <div className="container mx-auto justify-center items-center text-center mt-10">
          <h1 className="font-mono font-bold text-3xl text-sky-500 ">
            Search Your
          </h1>
          <h1 className="font-mono font-bold text-2xl md:text-5xl md:my-3 text-[#6c6d72f5]  ">
            Favourite Tourism Area
          </h1>

          <div className="input-group justify-center items-center text-center p-4 md:p-0">
            <input
              type="text"
              ref={searcTourism}
              placeholder="Type your Favourite Tourism Area......"
              className="input input-bordered w-full  md:w-[500px]"
            />
            <button
              onClick={tourismSearch}
              className="btn btn-square bg-sky-500 border-sky-500 hover:bg-sky-500 hover:border-sky-500 w-4/12 md:w-1/12 text-black"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-4 gap-10 my-10">
          {tourism.map((tour) => (
            <ChoseYourPerfectHoliday
              tour={tour}
              key={tour._id}
            ></ChoseYourPerfectHoliday>
          ))}
        </div>
      </div>

      <div className="relative ">
        <img
          src="https://i.ibb.co/0jR2p4Q/pexels-pok-rie-3215467.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />

        <div className="relative bg-gray-700 bg-opacity-75 ">
          <PerFactHoliday></PerFactHoliday>
        </div>
      </div>

      <div className=" my-16">
        <MostVisited></MostVisited>
      </div>
      {/* test purpose  */}
      <div className="">
        <Test></Test>
      </div>
    </div>
  );
};

export default Home;
