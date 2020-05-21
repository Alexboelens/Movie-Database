import React from 'react';
import SearchResultsList from './SearchResultsList'
import SearchResultsSearchBar from './SearchResultsSearchBar';


const SearchResults = () => {
    return (
        <div>
            <SearchResultsSearchBar />
            <SearchResultsList />
        </div>

    )
}


export default SearchResults;