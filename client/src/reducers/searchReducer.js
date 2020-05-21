import { GET_SEARCH_RESULTS } from '../actions/types'

const initialState = {
    searchResults: '',
    searchResultsAreLoaded: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
                searchResultsAreLoaded: action.searchResultsAreLoaded
            }
        default:
            return state;
    }
}