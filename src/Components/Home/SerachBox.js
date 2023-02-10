import React, { useState } from 'react';




const SerachBox = () => {
    const date = new Date();
    const [searchNameType, setSearchNameType]=useState([])


  
    return (
        <div
          className="container mx-auto bg-white shadow-2xl flex justify-center mt-5 p-5 z-50 
                 overflow-auto "
          data-aos="fade-up-right">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <input
              type="text"
              className="border-0"
              disabled
              name=""
              value={date}
              id=""
            />
            
            <input type="search" name="" id="" className='w-full rounded' />
            <input
              type="submit"
              value="Search"
              className="btn bg-sky-500 border-0 mx-2"
            />
          </form>
        </div>
    );
};

export default SerachBox;