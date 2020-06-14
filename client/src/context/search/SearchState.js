import React, { useReducer } from 'react';
import axios from 'axios';
import searchReducer from './searchReducer';
import SearchContext from './searchContext';
import { GET_SEARCH_RESULTS } from '../types';



const SearchState = props => {
    const initialState = {
        searchResults: '',
        searchResultsAreLoaded: false
    }

    const [state, dispatch] = useReducer(searchReducer, initialState);

    const getSearchResults = async (query, page) => {
        try {
            const res = await axios.get(`/search/${query}/${page}`);

            dispatch({
                type: GET_SEARCH_RESULTS,
                payload: res.data,
                searchResultsAreLoaded: true
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <SearchContext.Provider value={{
            searchResults: state.searchResults,
            searchResultsAreLoaded: state.searchResultsAreLoaded,
            getSearchResults
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;


