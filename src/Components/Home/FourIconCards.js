import React from 'react';
import { Link } from 'react-router-dom';
import camera from '../../Assets/FourIconCards/camera.png'
import building from '../../Assets/FourIconCards/Building.png'
import location from '../../Assets/FourIconCards/Location.png'
import world from '../../Assets/FourIconCards/world.png'
// 
const FourIconCards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

            <div className="card w-full bg-gray-50 shadow-lg ">
                <figure className="px-10 pt-10">
                    <img src={camera} alt="Shoes" className=" w-16 h-16 justify-center items-center  rounded   aspect-square lg:hover:-translate-y-2  transform transition duration-300 overflow-hidden" />
                </figure>
                <div className="card-body items-center text-center -mt-4">
                    <h2 className="card-title">Restaurants</h2>
                    <p>Aenean commodo ligula eget dolor. <br /> Lorem ipsum</p>
                   
                </div>
            </div>

            <div className="card w-full bg-gray-50 shadow-lg">
                <figure className="px-10 pt-10">
                    <img src={location} alt="Shoes" className=" w-16 h-16 justify-center items-center  rounded    aspect-square lg:hover:-translate-y-2  transform transition duration-300 overflow-hidden" />
                </figure>
                <div className="card-body items-center text-center -mt-4">
                    <h2 className="card-title">Sightseeing</h2>
                    <p>Aenean commodo ligula eget dolor. <br /> Lorem ipsum</p>
                   
                </div>
            </div>

            <div className="card w-full bg-gray-50 shadow-lg">
                <figure className="px-10 pt-10">
                    <img src={building} alt="Shoes" className=" w-16 h-16 justify-center items-center  rounded    aspect-square lg:hover:-translate-y-2  transform transition duration-300 overflow-hidden" />
                </figure>
                <div className="card-body items-center text-center -mt-4">
                    <h2 className="card-title">Shops & Boutiques</h2>
                    <p>Aenean commodo ligula eget dolor. <br /> Lorem ipsum</p>
                   
                </div>
            </div>

            <div className="card w-full bg-gray-50 shadow-lg">
                <figure className="px-10 pt-10">
                    <img src={world} alt="Shoes" className=" w-16 h-16 justify-center items-center  rounded    aspect-square lg:hover:-translate-y-2  transform transition duration-300 overflow-hidden" />
                </figure>
                <div className="card-body items-center text-center -mt-4">
                    <h2 className="card-title">Where to Stay</h2>
                    <p>Aenean commodo ligula eget dolor. <br /> Lorem ipsum</p>
                   
                </div>
            </div>

        </div>
    );
};

export default FourIconCards;