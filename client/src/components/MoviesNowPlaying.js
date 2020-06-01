import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMoviesNowPlaying } from '../actions/movieActions';
import { Container, Row, Col } from 'reactstrap'
import noImage from './images/no-movie-image.png';
import Box from './Box';



const MoviesNowPlaying = ({ nowPlayingLoaded, nowPlayingMovies, getMoviesNowPlaying }) => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        getMoviesNowPlaying(page);
    }, [getMoviesNowPlaying, page])


    return (
        <div>
            {nowPlayingLoaded &&
                <div>
                    <Container className='text-center mt-4 mb-5'>
                        <h1>Now Playing</h1>
                    </Container>

                    <Container>
                        <Row>
                            {nowPlayingMovies.results.map(item => (
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
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    nowPlayingMovies: state.movies.nowPlayingMovies,
    nowPlayingLoaded: state.movies.nowPlayingLoaded
})

export default connect(mapStateToProps, { getMoviesNowPlaying })(MoviesNowPlaying);

