import { GET_ALL_TRENDING_MOVIES, GET_MOVIES_BY_TITLE } from './types';
import axios from 'axios';


export const getTrendingMovies = () => dispatch => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=3c29d56bc6a6028be109cd46d895c48e')
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_MOVIES,
                payload: res.data,
                trendingMoviesAreLoaded: true
            })
        })
}

export const getMoviesByTitle = () => dispatch => {
    axios.get('enter url here')
        .then(res => {
            dispatch({
                type: GET_MOVIES_BY_TITLE,
                payload: res.data,
                moviesAreLoaded: true
            })
        })
}