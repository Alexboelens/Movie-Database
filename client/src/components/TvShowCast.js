import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getTvShowById } from '../actions/tvShowActions'
import CastItem from './CastItem';


const TvShowCast = ({ tvShow, tvShowIsLoaded, getTvShowById }) => {
    const id = window.location.pathname.split('/')[2];

    useEffect(() => {
        getTvShowById(id)
    }, [getTvShowById, id])

    return (
        <div>
            {tvShowIsLoaded &&
                <div>
                    <CastItem
                        title='Cast'
                        array={tvShow.credits.cast}
                    />
                    <CastItem
                        title='Crew'
                        array={tvShow.credits.crew}
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


export default connect(mapStateToProps, { getTvShowById })(TvShowCast);