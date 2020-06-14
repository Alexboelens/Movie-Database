import React, { useEffect, useContext } from 'react';
import TvContext from '../context/tv/tvContext';
import CastItem from './CastItem';


const TvShowCast = () => {
    const id = window.location.pathname.split('/')[2];

    const tvContext = useContext(TvContext);
    const { tvShow, tvShowIsLoaded, getTvShowById } = tvContext;


    useEffect(() => {
        getTvShowById(id);
        window.scrollTo({ top: 0, behavior: 'auto' });
        // eslint-disable-next-line
    }, [id])

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

export default TvShowCast;