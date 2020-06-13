import {
    GET_ALL_TRENDING_TVSHOWS,
    GET_TVSHOW_BY_ID,
    GET_TVSHOWS_AIRING_TODAY,
    GET_TVSHOWS_ON_TV,
    GET_TVSHOWS_TOP_RATED,
    GET_TVSHOWS_POPULAR
} from './types';

import axios from 'axios';


export const getTrendingTvShows = () => dispatch => {
    axios.get('/tv/trending')
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_TVSHOWS,
                payload: res.data,
                trendingTvShowsAreLoaded: true
            })
        })
}

export const getTvShowById = id => dispatch => {
    axios.get(`/tv/${id}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOW_BY_ID,
                payload: res.data,
                tvShowIsLoaded: true
            })
        })
}

export const getPopularTvShows = page => dispatch => {
    axios.get(`/tv/popular/${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_POPULAR,
                payload: res.data,
                popularTvShowsLoaded: true
            })
        })
}

export const getTvShowsOnTv = page => dispatch => {
    axios.get(`/tv/onTv/${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_ON_TV,
                payload: res.data,
                onTvLoaded: true
            })
        })
}

export const getTvShowsAiringToday = page => dispatch => {
    axios.get(`/tv/playing/${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_AIRING_TODAY,
                payload: res.data,
                airingTvShowsLoaded: true
            })
        })
}


export const getTopRatedTvShows = page => dispatch => {
    axios.get(`/tv/topRated/${page}`)
        .then(res => {
            dispatch({
                type: GET_TVSHOWS_TOP_RATED,
                payload: res.data,
                topRatedTvShowsLoaded: true
            })
        })
}

