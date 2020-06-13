import { GET_SEARCH_RESULTS } from './types'
import axios from 'axios';


export const getSearchResults = (query, page) => dispatch => {
    axios.get(`/search/${query}/${page}`)
        .then(res => {
            dispatch({
                type: GET_SEARCH_RESULTS,
                payload: res.data,
                searchResultsAreLoaded: true
            })
        })
}

