import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../actions/searchActions';
import SearchResultsSearchBar from './SearchResultsSearchBar';
import NoResults from './NoResults';
import SearchResultsListItem from './SearchResultsListItem'
import noImage from './images/no-movie-image.png';
import Pagination from './Pagination';



class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        this.changePage = this.changePage.bind(this);
        this.clearState = this.clearState.bind(this);
        this.renderImages = this.renderImages.bind(this);
        this.renderDate = this.renderDate.bind(this);
        this.renderLink = this.renderLink.bind(this);
        this.setPage = this.setPage.bind(this);
    }

    clearState() {
        this.setState({
            page: 1
        })
    }

    renderLink(item) {
        if (item.media_type === 'person') {
            return `/people/${item.id}`
        }
        if (item.media_type === 'tv') {
            return `/tv-shows/${item.id}`
        }
        if (item.media_type === 'movie') {
            return `/movies/${item.id}`
        }
    }

    renderImages(item) {
        if (item.media_type === 'person' && item.profile_path !== null) {
            return item.profile_path;
        }
        if (item.media_type === 'tv' && item.profile_path !== null) {
            return item.poster_path;
        }
        if (item.media_type === 'movie' && item.poster_path !== null) {
            return item.poster_path;
        }
    }

    renderDate(item) {
        if (item.media_type === 'person' && item.known_for_department) {
            return item.known_for_department !== null && item.known_for_department;
        }
        if (item.media_type === 'tv' && item.release_date) {
            return item.first_air_date !== null && item.first_air_date.split('-').reverse().join('-');
        }
        if (item.media_type === 'movie' && item.release_date) {
            return item.release_date && item.release_date.split('-').reverse().join('-');
        }
    }

    async changePage() {
        const query = window.location.pathname.split('/')[2];
        if (this.state.page < this.props.searchResults.total_pages) {
            await this.setState({
                page: this.state.page + 1
            })
            this.props.getSearchResults(query, this.state.page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    async setPage(pageNumber) {
        const query = window.location.pathname.split('/')[2];
        await this.setState({
            page: pageNumber
        })
        this.props.getSearchResults(query, this.state.page);
    }

    componentDidMount() {
        const query = window.location.pathname.split('/')[2] !== undefined ? window.location.pathname.split('/')[2] : ''
        this.props.getSearchResults(query, this.state.page)
    }


    render() {
        const results = this.props.searchResults;
        console.log(this.props.searchResults)
        console.log(results)
        return (
            <div>
                <SearchResultsSearchBar onClick={this.clearState} />
                {this.props.searchResultsAreLoaded &&
                    <div>
                        {this.props.searchResults.results.length === 0 && <NoResults />}
                        <div>
                            {results.results.length !== 0 &&
                                <div>
                                    {results.results.map(item => {
                                        return <SearchResultsListItem
                                            key={item.id}
                                            link={this.renderLink(item)}
                                            noImage={noImage}
                                            image={this.renderImages(item)}
                                            title={item.name ? item.name : item.original_title}
                                            content={item.overview ? item.overview : null}
                                            date={this.renderDate(item)}
                                        />
                                    })}
                                    <div>
                                        <Pagination
                                            totalPages={this.props.searchResults.total_pages}
                                            pageNumber={this.state.page}
                                            paginate={this.setPage}
                                            numPages={results.total_pages}
                                            totalResults={results.total_results}
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
}



const mapStateToProps = state => ({
    searchResults: state.search.searchResults,
    searchResultsAreLoaded: state.search.searchResultsAreLoaded
})

export default connect(mapStateToProps, { getSearchResults })(SearchResultList)