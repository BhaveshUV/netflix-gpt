import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBg = ({ id }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(id);

    return (
        <div>
            <iframe
                className='w-full aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key  + "?autoplay=1&loop=1&mute=1&playlist=" + trailerVideo?.key + "&showinfo=0&controls=0&autohide=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VideoBg;