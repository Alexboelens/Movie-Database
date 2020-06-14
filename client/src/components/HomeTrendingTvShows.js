import React, { useEffect, useContext } from 'react';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-movie-image.png';
import TvContext from '../context/tv/tvContext';


const HomeTrendingTvShows = () => {
    const tvContext = useContext(TvContext);

    const { getTrendingTvShows, trendingTvShows, trendingTvShowsAreLoaded } = tvContext;

    useEffect(() => {
        getTrendingTvShows();
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            {trendingTvShowsAreLoaded &&
                <Row>
                    <Col>
                        <h4 className='py-3'>Trending TV Shows</h4>
                    </Col>
                </Row>
            }
            <Row>
                <Col className='scroller'>
                    {trendingTvShowsAreLoaded &&
                        trendingTvShows.results.map(item => {
                            return <Box
                                noImage={noImage}
                                image={item.poster_path !== null && `https://image.tmdb.org/t/p/original${item.poster_path}`}
                                key={item.id}
                                link={`/tv/${item.id}`}
                                title={item.name ? item.name : item.original_name}
                                className='title-text text-center'
                            >
                            </Box>
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default HomeTrendingTvShows;