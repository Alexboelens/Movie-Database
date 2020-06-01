import React from 'react';
import { connect } from 'react-redux';
import { getMoviesById } from '../actions/movieActions';



const TvTopRated = () => {
    return (
        <div>tv top rated</div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})

export default connect(mapStateToProps, { getMoviesById })(TvTopRated);

