import React from 'react';
import video from '../../Resource/subscrib.mp4'

const Video = () => {
    return (
        <div className="">
        <div className="relative h-[300px] md:h-[400px] lg:h-[800px]">
        <video 
        autoPlay 
        loop
        muted
          src={video}
          className="absolute inset-0 object-center w-full h-full"
          alt=""
        />
        <div className=" h-full bg-gray-700 bg-opacity-75 justify-center relative flex items-center">
          <div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
                Cox's Bazar
                <br />
                Bangladesh
                </h1>

                

              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Video;