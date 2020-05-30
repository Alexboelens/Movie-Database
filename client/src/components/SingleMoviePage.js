import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMoviesById } from '../actions/movieActions';
import SingleItemHeader from './SingleItemHeader';
import SingleItemCast from './SingleItemCast';
import SingleItemVideos from './SingleItemVideos';
import SingleSimilarMovies from './SingleSimilarMovies';
import SingleReviews from './SingleReviews';


const SingleMoviePage = ({ getMoviesById, movies, moviesAreLoaded }) => {
    const id = window.location.pathname.split('/')[2];
    useEffect(() => {
        getMoviesById(id);
    }, [getMoviesById, id, moviesAreLoaded])


    console.log(movies)

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
                mainTitle='Top Actors'
                topCast={movies.credits.cast.length !== 0 && movies.credits.cast.slice(0, 6)}
                castArray={movies.credits.cast}
            />

            <SingleItemVideos
                mainTitle='Videos'
                videoArray={movies.videos.results}
            />
            <SingleSimilarMovies
                mainTitle='Similar Movies'
                array={movies.similar.results}
            />

            <SingleReviews
                userName='test username'
            />



        </div>}


    </div>


    )
}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    moviesAreLoaded: state.movies.moviesAreLoaded
})

export default connect(mapStateToProps, { getMoviesById })(SingleMoviePage);

