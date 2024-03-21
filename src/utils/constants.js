export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const BG_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTczOTI0MzA3MTk4YzQyMzRjOTE3MWI4MmQ5NWQ2NCIsInN1YiI6IjY1Zjk0NzQ2MzNhMzc2MDE4NDM2YjdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.At5akPCIkgAD5BrcXazc2z_XaV2fY3bX7N3lDmEyj6s'
    }
};

export const NOW_PLAYING_MOVIESLIST = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const GET_MOVIE_VIDEOS = (id) => {
    return "https://api.themoviedb.org/3/movie/" + id + "/videos";
}

export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";

export const SUPPORTED_LANGUAGES = [
    {identifer: "en", name: "English"},
    {identifer: "hindi", name: "Hindi"},
    {identifer: "spanish", name: "Spanish"},
]