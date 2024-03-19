import { useDispatch } from "react-redux";
import { API_OPTIONS, GET_MOVIE_VIDEOS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (id) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(GET_MOVIE_VIDEOS(id), API_OPTIONS);
        const json = await data.json();

        const trailers = json.results.filter(video => video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, [id]);
}

export default useMovieTrailer;