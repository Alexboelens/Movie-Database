import {
    GET_ALL_TRENDING_TVSHOWS,
    GET_TVSHOW_BY_ID,
    GET_TVSHOWS_AIRING_TODAY,
    GET_TVSHOWS_ON_TV,
    GET_TVSHOWS_TOP_RATED,
    GET_TVSHOWS_POPULAR
} from './types';

import axios from 'axios';
const key = '3c29d56bc6a6028be109cd46d895c48e'



export const getTrendingTvShows = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${key}`)
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_TVSHOWS,
                payload: res.data,
                trendingTvShowsAreLoaded: true
            })
        })
}

export const getTvShowById = id => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key}&append_to_response=videos,reviews,similar,credits`)
        .then(res => {
            dispatch({
                type: GET_TVSHOW_BY_ID,
                payload: res.data,
                tvShowIsLoaded: true
            })
        })
}

export const getTvShowsAiringToday = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_AIRING_TODAY,
                payload: res.data,
                airingTvShowsLoaded: true
            })
        })
}

export const getTvShowsOnTv = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_ON_TV,
                payload: res.data,
                TvShowsOnTvLoaded: true
            })
        })
}

export const getPopularTvShows = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_POPULAR,
                payload: res.data,
                popularTvShowsLoaded: true
            })
        })
}

export const getTopRatedTvShows = page => dispatch => {
    axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_TOP_RATED,
                payload: res.data,
                topRatedTvShowsLoaded: true
            })
        })
}

