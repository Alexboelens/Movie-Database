import axios from 'axios';
import {
    GET_MOVIES_BY_ID,
    GET_ALL_TRENDING_MOVIES,
    GET_MOVIES_NOW_PLAYING,
    GET_MOVIES_POPULAR,
    GET_MOVIES_TOP_RATED,
    GET_MOVIES_UPCOMING
} from './types';

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
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos,images,reviews,similar,credits`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_BY_ID,
                payload: res.data,
                moviesAreLoaded: true
            })
        })
}

export const getMoviesNowPlaying = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}&region=us`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_NOW_PLAYING,
                payload: res.data,
                nowPlayingLoaded: true
            })
        })
}

export const getUpcomingMovies = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}&region=us`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_UPCOMING,
                payload: res.data,
                upcomingLoaded: true
            })
        })
}

export const getTopRatedMovies = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${page}&region=us`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_TOP_RATED,
                payload: res.data,
                topRatedLoaded: true
            })
        })
}

export const getPopularMovies = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}&region=us`)
        .then(res => {
            dispatch({
                type: GET_MOVIES_POPULAR,
                payload: res.data,
                popularLoaded: true
            })
        })
}

