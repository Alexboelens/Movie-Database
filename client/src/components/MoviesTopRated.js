import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopRatedMovies } from '../actions/movieActions';
import { Container, Row, Col } from 'reactstrap'
import noImage from './images/no-movie-image.png';
import Box from './Box';
import Pagination from './Pagination';



const MoviesTopRated = ({ topRatedLoaded, topRatedMovies, getTopRatedMovies }) => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTopRatedMovies(page);
    }, [getTopRatedMovies, page])

    const changePage = async pageNum => {
        if (pageNum === 'next') {
            await setPage(page + 1);
        } else if (pageNum === 'prev') {
            await setPage(page - 1);
        } else {
            await setPage(pageNum);
        }
        getTopRatedMovies(page);
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return (
        <div>
            {topRatedLoaded &&
                <div>
                    <Container className='text-center mt-4 mb-5'>
                        <h1 onClick={changePage}>TopRated Movies</h1>
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

const mapStateToProps = state => ({
    topRatedMovies: state.movies.topRatedMovies,
    topRatedLoaded: state.movies.topRatedLoaded
})

export default connect(mapStateToProps, { getTopRatedMovies })(MoviesTopRated);

