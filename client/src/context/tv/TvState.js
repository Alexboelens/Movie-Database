import React, { useReducer } from 'react';
import tvReducer from './tvReducer';
import TvContext from './tvContext';
import axios from 'axios';
import {
    GET_ALL_TRENDING_TVSHOWS,
    GET_TVSHOW_BY_ID,
    GET_TVSHOWS_AIRING_TODAY,
    GET_TVSHOWS_ON_TV,
    GET_TVSHOWS_TOP_RATED,
    GET_TVSHOWS_POPULAR
} from '../types'

const TvState = props => {
    const initialState = {
        tvShow: '',
        tvShowIsLoaded: false,
        trendingTvShows: '',
        trendingTvShowsAreLoaded: false,
        tvShowsOnTv: '',
        onTvLoaded: false,
        popularTvShows: '',
        popularTvShowsLoaded: false,
        airingTvShows: '',
        airingTvShowsLoaded: false,
        topRatedTvShows: '',
        topRatedTvShowsLoaded: false
    }

    const [state, dispatch] = useReducer(tvReducer, initialState);

    const getTrendingTvShows = async () => {
        try {
            const res = await axios.get('/tv/trending');

            dispatch({
                type: GET_ALL_TRENDING_TVSHOWS,
                payload: res.data,
                trendingTvShowsAreLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getTvShowById = async id => {
        try {
            const res = await axios.get(`/tv/${id}`);

            dispatch({
                type: GET_TVSHOW_BY_ID,
                payload: res.data,
                tvShowIsLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getPopularTvShows = async page => {
        try {
            const res = await axios.get(`/tv/popular/${page}`);

            dispatch({
                type: GET_TVSHOWS_POPULAR,
                payload: res.data,
                popularTvShowsLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getTvShowsOnTv = async page => {
        try {
            const res = await axios.get(`/tv/onTv/${page}`);

            dispatch({
                type: GET_TVSHOWS_ON_TV,
                payload: res.data,
                onTvLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }

    const getTvShowsAiringToday = async page => {
        try {
            const res = await axios.get(`/tv/playing/${page}`);

            dispatch({
                type: GET_TVSHOWS_AIRING_TODAY,
                payload: res.data,
                airingTvShowsLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }


    const getTopRatedTvShows = async page => {
        try {
            const res = await axios.get(`/tv/topRated/${page}`);

            dispatch({
                type: GET_TVSHOWS_TOP_RATED,
                payload: res.data,
                topRatedTvShowsLoaded: true
            })
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <TvContext.Provider value={{
            tvShow: state.tvShow,
            tvShowIsLoaded: state.tvShowIsLoaded,
            trendingTvShows: state.trendingTvShows,
            trendingTvShowsAreLoaded: state.trendingTvShowsAreLoaded,
            tvShowsOnTv: state.tvShowsOnTv,
            onTvLoaded: state.onTvLoaded,
            popularTvShows: state.popularTvShows,
            popularTvShowsLoaded: state.popularTvShowsLoaded,
            airingTvShows: state.airingTvShows,
            airingTvShowsLoaded: state.airingTvShowsLoaded,
            topRatedTvShows: state.topRatedTvShows,
            topRatedTvShowsLoaded: state.topRatedTvShowsLoaded,
            getPopularTvShows,
            getTrendingTvShows,
            getTopRatedTvShows,
            getTvShowById,
            getTvShowsAiringToday,
            getTvShowsOnTv
        }}>
            {props.children}
        </TvContext.Provider>
    )
};

export default TvState;

