import React from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const MovieList = ({ title, list }) => {
    const isGptSearch = useSelector(store => store.gpt.isGptSearch);
    if (!list.length) return;
    return (
        <div className={`relative ${!isGptSearch ? "bottom-[4vw] md:bottom-[17vw]" : ""} pl-4 md:pl-12`}>
            <h1 className='font-bold py-3 text-lg text-white'>{title}</h1>
            <div className='movieList flex gap-1 overflow-x-auto'>
                {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default MovieList;