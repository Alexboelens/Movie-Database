import { GET_ALL_TRENDING_TVSHOWS } from '../actions/types';

const initialState = {
    trendingTvShows: '',
    trendingTvShowsAreLoaded: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TRENDING_TVSHOWS:
            return {
                ...state,
                trendingTvShows: action.payload,
                trendingTvShowsAreLoaded: action.trendingTvShowsAreLoaded
            }
        default:
            return state;
    }
}
