import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ movie }) => {
    return (
        <div className='flex-shrink-0'>
            <img alt="Movie-poster"
                src={IMG_CDN_URL + movie.poster_path}
                className='w-40' />
        </div>
    )
}

export default MovieCard;