import { GET_MOVIES_BY_TITLE, GET_ALL_TRENDING_MOVIES } from '../actions/types';

const initialState = {
    trendingMovies: '',
    trendingMoviesAreLoaded: false,
    movies: '',
    moviesAreLoaded: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TRENDING_MOVIES:
            return {
                ...state,
                trendingMovies: action.payload,
                trendingMoviesAreLoaded: action.trendingMoviesAreLoaded
            }
        case GET_MOVIES_BY_TITLE:
            return {
                ...state,
                movies: action.payload,
                moviesAreLoaded: action.moviesAreLoaded
            }
        default:
            return state;
    }
}
