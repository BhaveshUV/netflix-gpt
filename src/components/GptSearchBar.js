import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from "../utils/openai";
import { useDispatch } from 'react-redux';
import { addGptMovieNames, addMovieResults } from '../utils/gptSlice';
import { API_OPTIONS, GET_MOVIE_BY_NAME } from '../utils/constants';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.currLang);
    const query = useRef(null);
    const dispatch = useDispatch();

    const getTmdbMovie = async (movieName) => {
        const data = await fetch(GET_MOVIE_BY_NAME(movieName), API_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    const getGptMovies = async () => {
        if(!query.current.value) return;
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: "
            + query.current.value
            + ". Only give me names of 5 movies comma separated exactly like ahead without numbering example. Example: movie1, movie2, movie3, movie4, movie5 ";

        const gptMovies = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        let gptMoviesArray = gptMovies.choices[0].message.content.split(", ");
        
        let tmdbMovies = gptMoviesArray.map(movieName => getTmdbMovie(movieName));
        tmdbMovies = await Promise.all(tmdbMovies);
        dispatch(addGptMovieNames(gptMoviesArray));
        dispatch(addMovieResults(tmdbMovies));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getGptMovies();
    }

    return (
        <form className='flex gap-2 mx-auto p-3 bg-black w-full md:w-[40rem]'
            onSubmit={handleSubmit}>
            <input
                ref={query}
                type='text'
                placeholder={lang[langKey].gptPlaceholder}
                className='flex-grow rounded-md px-1' />
            <button className='text-white bg-red-800 px-4 py-1 rounded-md'>{lang[langKey].search}</button>
        </form>
    )
}

export default GptSearchBar;