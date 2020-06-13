import React, { useEffect, useContext } from 'react';
import SingleItemHeader from './SingleItemHeader';
import SingleItemCast from './SingleItemCast';
import SingleItemVideos from './SingleItemVideos';
import SingleSimilar from './SingleSimilar';
import SingleReviews from './SingleReviews';
import MovieContext from '../context/movie/movieContext';


const SingleMoviePage = () => {
    const id = window.location.pathname.split('/')[2];

    const movieContext = useContext(MovieContext);

    const { getMoviesById, movies, moviesAreLoaded } = movieContext;

    useEffect(() => {
        getMoviesById(id);
        // eslint-disable-next-line
    }, [])

    return (<div>
        {moviesAreLoaded && <div>
            <SingleItemHeader
                backdrop={movies.backdrop_path !== null && `https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
                title={movies.title ? movies.title : movies.original_name}
                year={movies.release_date}
                releaseDate={movies.release_date}
                runTime={movies.runtime}
                genres={movies.genres}
                status={movies.status}
                tagLine={movies.tagline}
                overview={movies.overview}
                itemImage={movies.poster_path !== null && `https://image.tmdb.org/t/p/original${movies.poster_path}`}
            />
            <SingleItemCast
                type='movies'
                mainTitle='Top Actors'
                topCast={movies.credits.cast.length !== 0 && movies.credits.cast.slice(0, 6)}
                castArray={movies.credits.cast}
            />

            <SingleItemVideos
                mainTitle='Videos'
                videoArray={movies.videos.results}
            />

            <SingleSimilar
                link='movies'
                mainTitle='Similar Movies'
                array={movies.similar.results}
            />

            <SingleReviews
                mainTitle='Reviews'
                reviewArray={movies.reviews.results}
            />
        </div>}
    </div>
    )
}

export default SingleMoviePage;

