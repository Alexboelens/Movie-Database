import React, { useState, useEffect, useContext } from 'react';
import SearchResultsSearchBar from './SearchResultsSearchBar';
import NoResults from './NoResults';
import SearchResultsListItem from './SearchResultsListItem'
import noImage from './images/no-movie-image.png';
import Pagination from './Pagination';
import SearchContext from '../context/search/searchContext';


const SearchResults = () => {
    const searchContext = useContext(SearchContext);
    const { getSearchResults, searchResults, searchResultsAreLoaded } = searchContext;

    const [page, setPage] = useState(1);

    const clearState = () => {
        setPage(1)
    }

    const changePage = pageNum => {
        if (pageNum === 'next') {
            setPage(page + 1)
        } else if (pageNum === 'prev') {
            setPage(page - 1)
        } else {
            setPage(pageNum)
        }
    }

    useEffect(() => {
        const path = window.location.pathname.split('/')[2]
        const query = path !== undefined ? path : ''
        getSearchResults(query, page);
        window.scrollTo({ top: 0, behavior: 'auto' });
        // eslint-disable-next-line
    }, [page])

    return (
        <div>
            <SearchResultsSearchBar onClick={clearState} />
            {searchResultsAreLoaded &&
                <div>
                    {searchResults.results.length === 0 && <NoResults />}
                    <div>
                        {searchResults.results.length !== 0 &&
                            <div>
                                {searchResults.results.map(item => {
                                    return <SearchResultsListItem
                                        key={item.id}
                                        item={item}
                                        noImage={noImage}
                                        title={item.name ? item.name : item.original_title}
                                        content={item.overview ? item.overview : null}
                                    />
                                })}
                                <div>
                                    <Pagination
                                        page={page}
                                        totalPages={searchResults.total_pages}
                                        totalResults={searchResults.total_results}
                                        changePage={changePage}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchResults;