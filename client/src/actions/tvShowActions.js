import { GET_ALL_TRENDING_TVSHOWS } from './types';
import axios from 'axios';


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

