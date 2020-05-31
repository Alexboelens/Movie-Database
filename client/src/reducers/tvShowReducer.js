import { GET_ALL_TRENDING_TVSHOWS, GET_TVSHOW_BY_ID } from '../actions/types';

const initialState = {
    trendingTvShows: '',
    trendingTvShowsAreLoaded: false,
    tvShow: '',
    tvShowIsLoaded: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TRENDING_TVSHOWS:
            return {
                ...state,
                trendingTvShows: action.payload,
                trendingTvShowsAreLoaded: action.trendingTvShowsAreLoaded
            }
        case GET_TVSHOW_BY_ID:
            return {
                ...state,
                tvShow: action.payload,
                tvShowIsLoaded: action.tvShowIsLoaded
            }
        default:
            return state;
    }
}
