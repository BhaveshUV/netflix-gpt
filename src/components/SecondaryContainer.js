import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movieLists = useSelector(store => store.movies);
  return (
    <div className='flex flex-col gap-10 bg-black'>
      {!movieLists.nowPlayingMovies ? null :
      <MovieList title="Now Playing" list={movieLists?.nowPlayingMovies}/>}

      {!movieLists.upcomingMovies ? null :
      <MovieList title="Upcoming" list={movieLists?.upcomingMovies}/>}

      {!movieLists.topRatedMovies ? null :
      <MovieList title="Top Rated" list={movieLists?.topRatedMovies}/>}
      
      {!movieLists.popularMovies ? null :
      <MovieList title="Popular" list={movieLists?.popularMovies}/>}
    </div>
  )
}

export default SecondaryContainer;