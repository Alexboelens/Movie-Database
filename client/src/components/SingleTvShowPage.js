import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { getTvShowById } from '../actions/tvShowActions';
import SingleItemHeader from './SingleItemHeader';
import SingleItemCast from './SingleItemCast';
import SingleSimilar from './SingleSimilar';
import SingleReviews from './SingleReviews';
import SingleItemVideos from './SingleItemVideos';
import AuthContext from '../context/auth/authContext';


const TvShowPage = ({ tvShow, tvShowIsLoaded, getTvShowById }) => {
    const id = window.location.pathname.split('/')[2];

    const authContext = useContext(AuthContext);
    const { loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        getTvShowById(id)
    }, [getTvShowById, id])

    return (
        <div>
            {tvShowIsLoaded &&
                <div>
                    <SingleItemHeader
                        type='tv'
                        backdrop={tvShow.backdrop_path !== null && `https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
                        title={tvShow.title ? tvShow.title : tvShow.original_name}
                        year={tvShow.first_air_date}
                        releaseDate={tvShow.first_air_date}
                        numEpisodes={tvShow.number_of_episodes}
                        numSeasons={tvShow.number_of_seasons}
                        genres={tvShow.genres}
                        status={tvShow.status}
                        tagLine={tvShow.tagline}
                        overview={tvShow.overview}
                        itemImage={tvShow.poster_path !== null && `https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
                    />

                    <SingleItemCast
                        type='tv'
                        mainTitle='Top Actors'
                        topCast={tvShow.credits.cast.length !== 0 && tvShow.credits.cast.slice(0, 6)}
                        castArray={tvShow.credits.cast}
                    />

                    <SingleItemVideos
                        mainTitle='Videos'
                        videoArray={tvShow.videos.results}
                    />

                    <SingleSimilar
                        link='tv'
                        mainTitle='Similar TV Shows'
                        array={tvShow.similar.results}
                    />

                    <SingleReviews
                        mainTitle='Reviews'
                        reviewArray={tvShow.reviews.results}
                    />
                </div>
            }

        </div>
    )
}

const mapStateToProps = state => ({
    tvShow: state.tvShows.tvShow,
    tvShowIsLoaded: state.tvShows.tvShowIsLoaded
})

export default connect(mapStateToProps, { getTvShowById })(TvShowPage);