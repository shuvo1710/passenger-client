import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoModal = () => {
   
    return (
        <div className=''>

            <input type="checkbox" id="VideoModal" className="modal-toggle" />
            <label htmlFor="VideoModal" className="modal cursor-pointer">
                <label className="" htmlFor="">
                 
                    <div className='player-wrapper md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]'>
                        <ReactPlayer
                            
                            className='react-player'
                            url='https://youtu.be/rkpzYNB6xks'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </label>

            </label>

        </div>
    );
};

export default VideoModal;