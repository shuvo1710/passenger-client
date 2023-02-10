import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import image from "../../Assets/greeting from paris.png";
import { AuthContext } from '../../UserContext/UseContext';
import HolidayStar from "./HolidayStar";

const ChoseYourPerfectHoliday = ({ tour }) => {
  const { details, name, night, picture, day, price, rating } = tour;
  const {user,refetch}=useContext(AuthContext)
  const email=user?.email;

  const bookingData=()=>{
      const data={
          address:name, balance:price, details,man:day, name, picture, rating,email , night

      }

      fetch('http://localhost:5000/bookingData',{
          method:"POST",
          headers:{
              'content-type':"application/json"
          },
          body:JSON.stringify(data)
      })
      .then(data=>{
          toast.success('Successfully added to your card')
          refetch()
      })
      .catch(error=>{
          toast.error(error.message)
      })
  }

  return (
    <div className="flex overflow-hidden relative flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full">
        <img
          src={picture}
          className="object-cover w-full md:h-[300px] rounded hover:scale-105 duration-700 hover:duration-700 -z-50"
          alt="Plan"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
        <div>
          <div className=" flex justify-between mb-2">
            <div className="font-bold text-xl uppercase">{name}</div>

            <div className="flex items-center gap-2">
              <span className="font-semibold ">Rating:</span>
              <HolidayStar rating={rating}></HolidayStar>
            </div>
          </div>

          <div className="mb-1">
            <p className="">
              <span className="font-bold">Detail:</span> {details.slice(0,80)}.
            </p>
          </div>
          <div>
            <p className="font-semibold">
              <span className="font-bold">Time:</span> {day} Days. And {night}{" "}
              Nights
            </p>
          </div>

          <div className=" flex justify-between w-full items-center bottom-3  my-2"  >
            <p className="mt-1 font-bold text-xl">
              
              <span>Price:</span> ${price}
            </p>

            {user?.uid ? 
                  <>
                    <button onClick={bookingData} className="btn bg-sky-300 border-0  text-black hover:bg-sky-300">
                      Book Now
                    </button>
                  </>
                 : 
                  <>
                    <button
                      className="btn btn-disabled bg-gray-300 text-black hover:bg-sky-300"
                    
                    >
                      Book Now
                    </button>
                  </>
                }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseYourPerfectHoliday;
