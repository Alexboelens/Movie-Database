import React, { useEffect, useState, useContext } from 'react';
import TvContext from '../context/tv/tvContext';
import { Container, Row, Col } from 'reactstrap'
import noImage from './images/no-movie-image.png';
import Box from './Box';
import Pagination from './Pagination';


const TvTopRated = () => {
    const tvContext = useContext(TvContext);
    const { topRatedTvShows, topRatedTvShowsLoaded, getTopRatedTvShows } = tvContext;

    const [page, setPage] = useState(1);

    useEffect(() => {
        getTopRatedTvShows(page);
        window.scrollTo({ top: 0, behavior: 'auto' });
        // eslint-disable-next-line
    }, [page])

    const changePage = async pageNum => {
        if (pageNum === 'next') {
            await setPage(page + 1);
        } else if (pageNum === 'prev') {
            await setPage(page - 1);
        } else {
            await setPage(pageNum);
        }
    }

    return (
        <div>
            {topRatedTvShowsLoaded &&
                <div>
                    <Container className='text-center mt-4 mb-5'>
                        <h1 onClick={changePage}>Top Rated TV Shows</h1>
                    </Container>

                    <Container>
                        <Row>
                            {topRatedTvShows.results.map(item => (
                                <Col xs='4' lg='2' className='mb-4' key={item.id}>
                                    <Box
                                        noImage={noImage}
                                        image={item.poster_path !== null && `https://image.tmdb.org/t/p/original${item.poster_path}`}
                                        link={`/tv/${item.id}`}
                                        title={item.name ? item.name : item.original_name}
                                        className='text-center bold py-2'
                                        releaseDate={item.first_air_date && item.first_air_date}
                                    >
                                    </Box>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    <Pagination
                        page={page}
                        totalPages={topRatedTvShows.total_pages}
                        totalResults={topRatedTvShows.total_results}
                        changePage={changePage}
                    />
                </div>
            }
        </div>
    )
}

export default TvTopRated;

