import React from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const MovieList = ({ title, list }) => {
    const isGptSearch = useSelector(store => store.gpt.isGptSearch);
    if (!list.length) return;
    return (
        <div className={`pl-12 relative ${!isGptSearch ? "bottom-[17vw]" : ""}`}>
            <h1 className='font-bold py-3 text-lg text-white'>{title}</h1>
            <div className='movieList flex gap-1 overflow-x-auto'>
                {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default MovieList;