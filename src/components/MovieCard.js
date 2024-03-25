import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ movie }) => {
    if(!movie.poster_path) return;
    return (
        <div className='movie-card flex-shrink-0 cursor-pointer'>
            <img alt="Movie-poster"
                src={IMG_CDN_URL + movie.poster_path}
                className='w-32 md:w-40' />
        </div>
    )
}

export default MovieCard;