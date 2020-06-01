import React from 'react';
import { connect } from 'react-redux';
import { getMoviesById } from '../actions/movieActions';



const MoviesPopular = () => {
    return (
        <div>popular movies</div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})

export default connect(mapStateToProps, { getMoviesById })(MoviesPopular);

