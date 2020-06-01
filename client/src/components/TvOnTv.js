import React from 'react';
import { connect } from 'react-redux';
import { getMoviesById } from '../actions/movieActions';



const TvOnTv = () => {
    return (
        <div> on tv</div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})

export default connect(mapStateToProps, { getMoviesById })(TvOnTv);

