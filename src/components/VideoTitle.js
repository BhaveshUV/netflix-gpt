import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video absolute text-white flex items-center bg-gradient-to-r from-black'>
            <div className='flex flex-col min-w-[32rem] w-min gap-4 pl-12 absolute top-[13vw]'>
                <h1 className='text-5xl font-bold'>{title}</h1>
                <p className=''>{overview}</p>
                <div className='flex gap-2'>
                    <button className='bg-white px-6 py-2 rounded-[4px] text-black flex hover:bg-neutral-300'>
                        <div className='rotate-90 scale-150'>▲</div>&nbsp;&nbsp;Play
                    </button>
                    <button className='bg-neutral-700 px-6 py-2 rounded-[4px] flex items-center hover:bg-opacity-60'>
                        <div className='w-6 h-6 leading-none border-[3px] border-white rounded-full flex items-center justify-center'>i</div>&nbsp;&nbsp;More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;