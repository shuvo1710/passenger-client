import React from 'react';
import { FaEnvelopeOpenText, FaFacebookF, FaInstagram, FaPhone, FaSearchLocation, FaSnapchat, FaTwitter } from 'react-icons/fa';

const TopNavbar = () => {
    return (
        <div className='bg-black text-white hidden md:hidden lg:block '>

            <div className='flex justify-between '>
                <div className='flex justify-center items-center text-center'>
                    <div className='flex'>
                        <p><FaEnvelopeOpenText className='mt-1 mx-5 text-sky-400 '></FaEnvelopeOpenText></p>
                        <p className='hover:text-sky-400'>Setsail@gmail.com</p>
                    </div>
                    <div className='flex'>
                        <p><FaPhone className='mt-1 mx-5 text-sky-400'></FaPhone></p>
                        <p className='hover:text-sky-400'>01893516526</p>
                    </div>
                    <div className='flex'>
                        <p><FaSearchLocation className='mt-1 mx-5 text-sky-400'></FaSearchLocation></p>
                        <p className='hover:text-sky-400'>Sherpur, Sadar, Brahmanbaria, Bangladesh</p>
                    </div>
                </div>

                <div className='flex justify-center items-center text-center'>

                    <div className='flex gap-4 mx-5'>
                        <p className='text-white hover:text-sky-400'><FaFacebookF></FaFacebookF></p>
                        <p className='text-white hover:text-sky-400'><FaTwitter></FaTwitter></p>
                        <p className='text-white hover:text-sky-400'><FaSnapchat></FaSnapchat></p>
                        <p className='text-white hover:text-sky-400'><FaInstagram></FaInstagram></p>
                    </div>

                    <div className='  bg-sky-400 z-50'>
                        <div className="dropdown dropdown-hover mx-4">
                            <label tabIndex={0} className=" btn btn-ghost">English</label>
                          
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;