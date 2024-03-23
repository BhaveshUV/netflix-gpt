import { POPULAR_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const popularMovies = useSelector(store => store.movies.popularMovies);
    let dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        if(!popularMovies) getPopularMovies();
    }, []);
}

export default usePopularMovies;