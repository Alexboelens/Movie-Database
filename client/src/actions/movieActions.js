import axios from 'axios';
import {
    GET_MOVIES_BY_ID,
    GET_ALL_TRENDING_MOVIES,
    GET_MOVIES_NOW_PLAYING,
    GET_MOVIES_POPULAR,
    GET_MOVIES_TOP_RATED,
    GET_MOVIES_UPCOMING
} from './types';



export const getTrendingMovies = () => dispatch => {
    axios.get('/movies/trending')
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_MOVIES,
                payload: res.data,
                trendingMoviesAreLoaded: true
            })
        })
}

export const getMoviesById = id => dispatch => {
    axios.get(`/movies/${id}`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_BY_ID,
                payload: res.data,
                moviesAreLoaded: true
            })
        })
}

export const getMoviesNowPlaying = page => dispatch => {
    axios.get(`/movies/playing/${page}`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_NOW_PLAYING,
                payload: res.data,
                nowPlayingLoaded: true
            })
        })
}

export const getPopularMovies = page => dispatch => {
    axios.get(`/movies/popular/${page}`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_POPULAR,
                payload: res.data,
                popularLoaded: true
            })
        })
}

export const getUpcomingMovies = page => dispatch => {
    axios.get(`/movies/upcoming/${page}`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_UPCOMING,
                payload: res.data,
                upcomingLoaded: true
            })
        })
}

export const getTopRatedMovies = page => dispatch => {
    axios.get(`/movies/topRated/${page}`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_TOP_RATED,
                payload: res.data,
                topRatedLoaded: true
            })
        })
}

