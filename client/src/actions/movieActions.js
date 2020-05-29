import { GET_ALL_TRENDING_MOVIES, GET_MOVIES_BY_ID } from './types';
import axios from 'axios';
const key = '3c29d56bc6a6028be109cd46d895c48e'

export const getTrendingMovies = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_MOVIES,
                payload: res.data,
                trendingMoviesAreLoaded: true
            })
        })
}

export const getMoviesById = id => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos,images,reviews,similar,recommendations,credits`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_BY_ID,
                payload: res.data,
                moviesAreLoaded: true
            })
        })
}

