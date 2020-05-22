import { GET_SEARCH_RESULTS } from './types'
import axios from 'axios';


export const getSearchResults = (query, page) => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=3c29d56bc6a6028be109cd46d895c48e&language=en-US&query=${query}&page=${page}&include_adult=false`)
        .then(res => {
            dispatch({
                type: GET_SEARCH_RESULTS,
                payload: res.data,
                searchResultsAreLoaded: true
            })
        })
}

