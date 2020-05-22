import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../actions/searchActions';
import SearchResultsSearchBar from './SearchResultsSearchBar';
import NoResults from './NoResults';
import SearchResultsListItem from './SearchResultsListItem'
import noImage from './images/no-movie-image.png';



class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        this.nextPage = this.nextPage.bind(this);
        this.clearState = this.clearState.bind(this);
        this.renderImages = this.renderImages.bind(this);
        this.renderDate = this.renderDate.bind(this);
    }

    clearState() {
        this.setState({
            page: 1
        })
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

    async nextPage() {
        const query = window.location.pathname.split('/')[2];
        if (this.state.page < this.props.searchResults.total_pages) {
            await this.setState({
                page: this.state.page + 1
            })
            this.props.getSearchResults(query, this.state.page)
        }
    }





    componentDidMount() {
        const query = window.location.pathname.split('/')[2] !== undefined ? window.location.pathname.split('/')[2] : ''
        this.props.getSearchResults(query, this.state.page)
    }


    render() {
        const results = this.props.searchResults.results;
        console.log(results)
        return (
            <div>
                <SearchResultsSearchBar onClick={this.clearState} />
                {this.props.searchResultsAreLoaded &&
                    <div>
                        {this.props.searchResults.results.length === 0 && <NoResults />}
                        <div>
                            {results.length !== 0 &&
                                <div>
                                    {results.map(item => {
                                        return <SearchResultsListItem
                                            key={item.id}
                                            noImage={noImage}
                                            image={this.renderImages(item)}
                                            title={item.name ? item.name : item.original_title}
                                            content={item.overview ? item.overview : null}
                                            date={this.renderDate(item)}
                                        />
                                    })}
                                    <div>
                                        <button onClick={this.nextPage}>NEXTPAGE</button>
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