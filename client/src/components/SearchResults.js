import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../actions/searchActions';
import SearchResultsSearchBar from './SearchResultsSearchBar';
import NoResults from './NoResults';
import SearchResultsListItem from './SearchResultsListItem'
import noImage from './images/no-movie-image.png';
import Pagination from './Pagination';



const SearchResults = ({ getSearchResults, searchResults, searchResultsAreLoaded }) => {
    const [page, setPage] = useState(1);

    const clearState = () => {
        setPage(1)
    }

    const changePage = pageNum => {
        const query = window.location.pathname.split('/')[2];
        if (pageNum === 'next') {
            setPage(page + 1)
        } else if (pageNum === 'prev') {
            setPage(page - 1)
        } else {
            setPage(pageNum)
        }
        getSearchResults(query, page);
    }

    useEffect(() => {
        const path = window.location.pathname.split('/')[2]
        const query = path !== undefined ? path : ''
        getSearchResults(query, page)
    }, [getSearchResults, page])

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


const mapStateToProps = state => ({
    searchResults: state.search.searchResults,
    searchResultsAreLoaded: state.search.searchResultsAreLoaded
})

export default connect(mapStateToProps, { getSearchResults })(SearchResults)