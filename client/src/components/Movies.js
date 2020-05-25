import React from 'react';
import { connect } from 'react-redux';
import { getMoviesByTitle } from '../actions/movieActions';



// delete code and refactor after redux function
class Movies extends React.Component {

    componentDidMount() {
        // const key = '3c29d56bc6a6028be109cd46d895c48e'
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c29d56bc6a6028be109cd46d895c48e&language=en-US&query=spider&page=2&include_adult=trueappend_to_response=videos,images`, {
            method: 'GET'
        }).then(response => response.json())
            .then(data => console.log(data))

    }
    render() {
        return (

            <h1>movies</h1>



        )
    }
}


const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})

export default connect(mapStateToProps, { getMoviesByTitle })(Movies);

