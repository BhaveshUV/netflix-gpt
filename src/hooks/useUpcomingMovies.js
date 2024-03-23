import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
        const json = await data.json();
        
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        if(!upcomingMovies) getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;