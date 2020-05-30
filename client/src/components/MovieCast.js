import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getMoviesById } from '../actions/movieActions'
import CastItem from './CastItem';


const Cast = ({ movies, moviesAreLoaded, getMoviesById }) => {
    const id = window.location.pathname.split('/')[2];

    console.log(movies)

    useEffect(() => {
        getMoviesById(id)
    }, [getMoviesById, id])


    return (
        <div>
            {moviesAreLoaded &&
                <div>
                    <CastItem
                        title='Cast'
                        array={movies.credits.cast}
                    />

                    <CastItem
                        title='Crew'
                        array={movies.credits.crew}
                    />
                </div>
            }
        </div>


    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})


export default connect(mapStateToProps, { getMoviesById })(Cast);