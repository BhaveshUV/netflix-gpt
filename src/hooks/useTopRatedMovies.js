import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    let dispatch = useDispatch();

    useEffect(() => {
        const getTopRatedMovies = async () => {
            const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
            const json = await data.json();
            dispatch(addTopRatedMovies(json.results));
        }
        if (!topRatedMovies) getTopRatedMovies();
    }, [topRatedMovies, dispatch]);
}

export default useTopRatedMovies;