import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../actions/movieActions';
import { Container, Row, Col } from 'reactstrap'
import noImage from './images/no-movie-image.png';
import Box from './Box';
import Pagination from './Pagination';



const MoviesPopular = ({ popularLoaded, popularMovies, getPopularMovies }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPopularMovies(page);
    }, [getPopularMovies, page])

    const changePage = async pageNum => {
        if (pageNum === 'next') {
            await setPage(page + 1);
        } else if (pageNum === 'prev') {
            await setPage(page - 1);
        } else {
            await setPage(pageNum);
        }
        getPopularMovies(page);
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return (
        <div>
            {popularLoaded &&
                <div>
                    <Container className='text-center mt-4 mb-5'>
                        <h1 onClick={changePage}>Popular Movies</h1>
                    </Container>

                    <Container>
                        <Row>
                            {popularMovies.results.map(item => (
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
                        totalPages={popularMovies.total_pages}
                        totalResults={popularMovies.total_results}
                        changePage={changePage}
                    />
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    popularMovies: state.movies.popularMovies,
    popularLoaded: state.movies.popularLoaded
})

export default connect(mapStateToProps, { getPopularMovies })(MoviesPopular);

