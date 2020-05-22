import React from 'react';
import NoResults from './NoResults';
import SearchResultsSearchBar from './SearchResultsSearchBar';


const NoSearchResult = () => {
    return (
        <div>
            <SearchResultsSearchBar />
            <NoResults />
        </div>
    )
}

export default NoSearchResult;