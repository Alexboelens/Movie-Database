import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../actions/searchActions';


class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        this.changePage = this.changePage.bind(this);
    }

    async changePage() {
        const query = window.location.pathname.split('/')[2]
        await this.setState({
            page: this.state.page + 1
        })
        this.props.getSearchResults(query, this.state.page)
    }

    componentDidMount() {
        const query = window.location.pathname.split('/')[2] !== undefined ? window.location.pathname.split('/')[2] : ' '
        this.props.getSearchResults(query, this.state.page)
    }

    render() {
        console.log(this.props.searchResults)

        return (
            <div>
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