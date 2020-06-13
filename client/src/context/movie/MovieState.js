import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import {
    GET_MOVIES_BY_ID,
    GET_ALL_TRENDING_MOVIES,
    GET_MOVIES_NOW_PLAYING,
    GET_MOVIES_POPULAR,
    GET_MOVIES_TOP_RATED,
    GET_MOVIES_UPCOMING
} from '../types';

const MovieState = props => {
    const initialState = {
        trendingMovies: '',
        trendingMoviesAreLoaded: false,
        movies: '',
        moviesAreLoaded: false,
        nowPlayingMovies: '',
        nowPlayingLoaded: false,
        popularMovies: '',
        popularLoaded: false,
        topRatedMovies: '',
        topRatedLoaded: false,
        upcomingMovies: '',
        upcomingLoaded: false
    }

    const [state, dispatch] = useReducer(movieReducer, initialState);


    const getTrendingMovies = async () => {
        try {
            const res = await axios.get('/movies/trending');

            dispatch({
                type: GET_ALL_TRENDING_MOVIES,
                payload: res.data,
                trendingMoviesAreLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getMoviesById = async id => {
        try {
            const res = await axios.get(`/movies/${id}`);

            dispatch({
                type: GET_MOVIES_BY_ID,
                payload: res.data,
                moviesAreLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getMoviesNowPlaying = async page => {
        try {
            const res = await axios.get(`/movies/playing/${page}`);

            dispatch({
                type: GET_MOVIES_NOW_PLAYING,
                payload: res.data,
                nowPlayingLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getPopularMovies = async page => {
        try {
            const res = await axios.get(`/movies/popular/${page}`);

            dispatch({
                type: GET_MOVIES_POPULAR,
                payload: res.data,
                popularLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getUpcomingMovies = async page => {
        try {
            const res = await axios.get(`/movies/upcoming/${page}`);

            dispatch({
                type: GET_MOVIES_UPCOMING,
                payload: res.data,
                upcomingLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getTopRatedMovies = async page => {
        try {
            const res = await axios.get(`/movies/topRated/${page}`);

            dispatch({
                type: GET_MOVIES_TOP_RATED,
                payload: res.data,
                topRatedLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <MovieContext.Provider value={{
            trendingMovies: state.trendingMovies,
            trendingMoviesAreLoaded: state.trendingMoviesAreLoaded,
            movies: state.movies,
            moviesAreLoaded: state.moviesAreLoaded,
            nowPlayingMovies: state.nowPlayingMovies,
            nowPlayingLoaded: state.nowPlayingLoaded,
            popularMovies: state.popularMovies,
            popularLoaded: state.popularLoaded,
            topRatedMovies: state.topRatedMovies,
            topRatedLoaded: state.topRatedLoaded,
            upcomingMovies: state.upcomingMovies,
            upcomingLoaded: state.upcomingLoaded,
            getTrendingMovies,
            getTopRatedMovies,
            getUpcomingMovies,
            getMoviesById,
            getMoviesNowPlaying,
            getPopularMovies
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieState;