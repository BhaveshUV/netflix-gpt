import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video absolute text-white flex bg-gradient-to-r from-black'>
            <div className='flex flex-col absolute w-[60%] gap-2 md:w-[32rem] md:pl-12 md:top-[13vw] md:gap-4 scale-75 tra md:scale-100'>
                <h1 className='font-bold text-2xl md:text-5xl'>{title}</h1>
                <div className='hidden md:inline-block'>
                    <p style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: "3"
                    }}>{overview}</p>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-white rounded-[4px] text-black flex hover:bg-neutral-300 px-3 py-1 md:px-6 md:py-2'>
                        <div className='rotate-90 scale-125 md:scale-150'>▲</div>&nbsp;&nbsp;Play
                    </button>
                    <button className='bg-neutral-700 px-6 py-2 rounded-[4px] items-center hover:bg-opacity-60 hidden md:flex'>
                        <div className='w-6 h-6 leading-none border-[3px] border-white rounded-full flex items-center justify-center'>i</div>&nbsp;&nbsp;<span className='text-nowrap'>More Info</span>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default VideoTitle;