import React from 'react';
import { connect } from 'react-redux';
import { getMoviesById } from '../actions/movieActions';



const MoviesUpcoming = () => {
    return (
        <div>upcoming movies</div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})

export default connect(mapStateToProps, { getMoviesById })(MoviesUpcoming);

