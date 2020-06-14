import React, { useEffect, useContext } from 'react'
import CastItem from './CastItem';
import MovieContext from '../context/movie/movieContext';


const MovieCast = () => {
    const id = window.location.pathname.split('/')[2];

    const movieContext = useContext(MovieContext);
    const { movies, moviesAreLoaded, getMoviesById } = movieContext;

    useEffect(() => {
        getMoviesById(id)
        window.scrollTo({ top: 0, behavior: 'auto' });
        // eslint-disable-next-line
    }, [id])

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