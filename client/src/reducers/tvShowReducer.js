import {
    GET_ALL_TRENDING_TVSHOWS,
    GET_TVSHOW_BY_ID,
    GET_TVSHOWS_AIRING_TODAY,
    GET_TVSHOWS_ON_TV,
    GET_TVSHOWS_TOP_RATED,
    GET_TVSHOWS_POPULAR
} from '../actions/types'

const initialState = {
    tvShowIsLoaded: false,
    tvShow: '',
    trendingTvShows: '',
    tvShowsOnTv: '',
    popularTvShows: '',
    tvShowsAiringToday: '',
    topRatedTvShows: ''



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
        case GET_TVSHOWS_AIRING_TODAY:
            return {
                ...state,
                tvShow: action.payload,
                airingTvShowsLoaded: action.airingTvShowsLoaded
            }
        case GET_TVSHOWS_ON_TV:
            return {
                ...state,
                tvShow: action.payload,
                TvShowsOnTvLoaded: action.TvShowsOnTvLoaded
            }
        case GET_TVSHOWS_POPULAR:
            return {
                ...state,
                tvShow: action.payload,
                popularTvShowsLoaded: action.popularTvShowsLoaded
            }
        case GET_TVSHOWS_TOP_RATED:
            return {
                ...state,
                tvShow: action.payload,
                topRatedTvShowsLoaded: action.topRatedTvShowsLoaded
            }
        default:
            return state;
    }
}
