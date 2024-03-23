import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
    const movieNames = useSelector(store => store.gpt.gptMovieNames);
    const allMovies = useSelector(store => store.gpt.movieResults);

    if (!movieNames || !allMovies) return;

    return (
        <div className='flex flex-col gap-10'>
            {
                allMovies.map(((movies, index) =>
                    <MovieList key={movieNames[index]} title={movieNames[index]} list={movies} />
                ))
            }
        </div>
    )
}

export default GptMovieSuggestions;