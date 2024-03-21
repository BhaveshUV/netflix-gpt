import React from 'react';
import { BG_IMG } from '../utils/constants';
import GptSearchBar from './GptSearchBar';

const GptContainer = () => {
    return (
        <div className='min-h-[100dvh] py-20 bg-black bg-opacity-60 object-contain'>
            <img src={BG_IMG} alt='bg'
                className='fixed top-0 h-full w-full object-cover -z-10' />
            <GptSearchBar />
        </div>
    )
}

export default GptContainer;