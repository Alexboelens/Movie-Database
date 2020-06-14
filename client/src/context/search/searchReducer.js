import { GET_SEARCH_RESULTS } from '../types';


export default (state, action) => {
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