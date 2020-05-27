import React from 'react';
import { connect } from 'react-redux';
import { getMoviesById } from '../actions/movieActions';
import SingleItemHeader from './SingleItemHeader';
import SingleItemCast from './SingleItemCast';
import SingleItemVideos from './SingleItemVideos';



const SingleMoviePage = () => {
    return (
        <div>
            <SingleItemHeader />
            <SingleItemCast
                mainTitle='Top Billed Actors' />
            <SingleItemVideos
                mainTitle='Videos'
            />
        </div>
    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})

export default connect(mapStateToProps, { getMoviesById })(SingleMoviePage);

