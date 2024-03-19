import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBg from './VideoBg';

const MainContainer = () => {
    const mainMovie = useSelector(store => store.movies?.nowPlayingMovies?.[0]);
    if (!mainMovie) return;
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBg id={id} />
        </div>
    )
}

export default MainContainer;