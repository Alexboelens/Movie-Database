import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap'
import noImage from './images/no-movie-image.png';
import Box from './Box';
import Pagination from './Pagination';
import MovieContext from '../context/movie/movieContext';


const MoviesTopRated = () => {
    const movieContext = useContext(MovieContext);

    const { topRatedLoaded, topRatedMovies, getTopRatedMovies } = movieContext;

    const [page, setPage] = useState(1);

    useEffect(() => {
        getTopRatedMovies(page);
        window.scrollTo({ top: 0, behavior: 'auto' });
        //eslint-disable-next-line
    }, [page])

    const changePage = pageNum => {
        if (pageNum === 'next') {
            setPage(page + 1);
        } else if (pageNum === 'prev') {
            setPage(page - 1);
        } else {
            setPage(pageNum);
        }
    }

    return (
        <div>
            {topRatedLoaded &&
                <div>
                    <Container className='text-center mt-4 mb-5'>
                        <h1 onClick={changePage}>Top Rated Movies</h1>
                    </Container>

                    <Container>
                        <Row>
                            {topRatedMovies.results.map(item => (
                                <Col xs='4' lg='2' className='mb-4' key={item.id}>
                                    <Box
                                        noImage={noImage}
                                        image={item.poster_path !== null && `https://image.tmdb.org/t/p/original${item.poster_path}`}
                                        link={`/movies/${item.id}`}
                                        title={item.title}
                                        className='text-center bold py-2'
                                        releaseDate={item.release_date}
                                    >
                                    </Box>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    <Pagination
                        page={page}
                        totalPages={topRatedMovies.total_pages}
                        totalResults={topRatedMovies.total_results}
                        changePage={changePage}
                    />
                </div>
            }
        </div>
    )
}

export default MoviesTopRated;

