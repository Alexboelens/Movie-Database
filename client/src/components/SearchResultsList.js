import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../actions/searchActions';
import SearchResultsSearchBar from './SearchResultsSearchBar';



class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        this.changePage = this.changePage.bind(this);
        this.clearState = this.clearState.bind(this);
    }

    clearState() {
        this.setState({
            page: 1
        })
    }

    async changePage() {
        const query = window.location.pathname.split('/')[2];
        if (this.state.page < this.props.searchResults.total_pages) {
            await this.setState({
                page: this.state.page + 1
            })
            this.props.getSearchResults(query, this.state.page)
        }
    }

    componentDidMount() {
        const query = window.location.pathname.split('/')[2] !== undefined ? window.location.pathname.split('/')[2] : ' '
        this.props.getSearchResults(query, this.state.page)
    }

    render() {
        return (

            <div>
                <SearchResultsSearchBar onClick={this.clearState} />
                {this.props.searchResultsAreLoaded &&
                    <div>
                        <div>
                            <button onClick={this.changePage}>NEXTPAGE</button>
                        </div>
                        <div>
                            {this.props.searchResults.results.length !== 0 && this.props.searchResults.results.map(item => {
                                return <div>{item.name ? item.name : item.original_title}</div>
                            })
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