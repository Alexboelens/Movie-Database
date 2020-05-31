import { GET_ALL_TRENDING_TVSHOWS, GET_TVSHOW_BY_ID } from './types';
import axios from 'axios';
const key = '3c29d56bc6a6028be109cd46d895c48e'


export const getTrendingTvShows = () => dispatch => {
    axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=3c29d56bc6a6028be109cd46d895c48e')
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

