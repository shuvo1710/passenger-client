import React from "react";
import video from "../Resource/subscrib.mp4";

const Test = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/D1ZHmbR/pexels-asad-photo-maldives-2549018.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-500 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className=" items-center justify-between xl:flex-row">
          <div className=" justify-center items-center">
         <div className="justify-center items-center text-center">
         <h4 className="font-bold mb-3 text-md md:text-2xl leading-9 text-white">
              LET'S STAY IN TOUCH FOR BEST DEALS
            </h4>
            <p className="font-semibold mb-4 text-white">
              Get latest update and offers from <span className="">The-Passenger</span>
            </p>
         </div>
            <div className="form-control mx-auto w-full md:w-6/12">
              <label className="input-group justify-center">
                <input
                  type="text"
                  placeholder="Type Your Email................."
                  className="input input-bordered w-full md:w-8/12"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded font-semibold bg-sky-300 border-0 hover:bg-sky-300 text-black "
                >
                  Subscribe
                </button>
              </label>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Test;
