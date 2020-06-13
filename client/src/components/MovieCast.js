import React, { useEffect, useContext } from 'react'
import CastItem from './CastItem';
import MovieContext from '../context/movie/movieContext';


const MovieCast = () => {
    const id = window.location.pathname.split('/')[2];

    const movieContext = useContext(MovieContext);
    const { movies, moviesAreLoaded, getMoviesById } = movieContext;

    useEffect(() => {
        getMoviesById(id)
        // eslint-disable-next-line
    }, [])

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

export default MovieCast;