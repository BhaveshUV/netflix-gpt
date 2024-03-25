import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIESLIST } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch(NOW_PLAYING_MOVIESLIST, API_OPTIONS);
            const json = await data.json();

            dispatch(addNowPlayingMovies(json.results));
        }
        if (!nowPlayingMovies) getNowPlayingMovies();
    }, [nowPlayingMovies, dispatch]);
}

export default useNowPlayingMovies;