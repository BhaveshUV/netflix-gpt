import { POPULAR_MOVIES, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    let dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;