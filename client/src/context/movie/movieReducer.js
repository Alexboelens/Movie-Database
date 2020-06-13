import {
    GET_MOVIES_BY_ID,
    GET_ALL_TRENDING_MOVIES,
    GET_MOVIES_NOW_PLAYING,
    GET_MOVIES_POPULAR,
    GET_MOVIES_TOP_RATED,
    GET_MOVIES_UPCOMING
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ALL_TRENDING_MOVIES:
            return {
                ...state,
                trendingMovies: action.payload,
                trendingMoviesAreLoaded: action.trendingMoviesAreLoaded
            }
        case GET_MOVIES_BY_ID:
            return {
                ...state,
                movies: action.payload,
                moviesAreLoaded: action.moviesAreLoaded
            }
        case GET_MOVIES_NOW_PLAYING:
            return {
                ...state,
                nowPlayingMovies: action.payload,
                nowPlayingLoaded: action.nowPlayingLoaded
            }
        case GET_MOVIES_POPULAR:
            return {
                ...state,
                popularMovies: action.payload,
                popularLoaded: action.popularLoaded
            }
        case GET_MOVIES_TOP_RATED:
            return {
                ...state,
                topRatedMovies: action.payload,
                topRatedLoaded: action.topRatedLoaded
            }
        case GET_MOVIES_UPCOMING:
            return {
                ...state,
                upcomingMovies: action.payload,
                upcomingLoaded: action.upcomingLoaded
            }
        default:
            return state;
    }
}