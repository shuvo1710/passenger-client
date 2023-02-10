import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const SearchCard = ({ search }) => {
  const { picture, name, details, locations, _id } = search;

  return (
    <div className=" hover:-translate-y-2 duration-700 hover:duration-700">
      <Link
        to={`/area/${_id}`}
        className="hoverEffect overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img src={picture} className="object-cover w-full h-64" alt="" />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <p className="transition-colors duration-200 text-blue-gray-900 ">
              {locations?.length} Visiting Area
            </p>
          </p>
          <h1 className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 uppercase">
            {name}
          </h1>
          <p className="mb-2 text-gray-700">{details.slice(0, 80)}.....</p>
        
        </div>
      </Link>
    </div>


  
  );
};

export default SearchCard;
