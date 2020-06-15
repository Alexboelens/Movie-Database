import React, { useEffect, useContext } from 'react';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-movie-image.png';
import MovieContext from '../context/movie/movieContext';


const HomeTrendingMovies = () => {
    const movieContext = useContext(MovieContext);

    const { trendingMovies, trendingMoviesAreLoaded, getTrendingMovies } = movieContext;



    useEffect(() => {
        getTrendingMovies();
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            {trendingMoviesAreLoaded &&
                <Row>
                    <Col>
                        <h4 className='py-3'>Trending Movies</h4>
                    </Col>
                </Row>
            }
            <Row>
                <Col className='scroller'>
                    {trendingMoviesAreLoaded &&
                        trendingMovies.results.map(movie => (
                            <Box
                                key={movie.id}
                                noImage={noImage}
                                image={movie.poster_path !== null && `https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                link={`movies/${movie.id}`}
                                title={movie.name ? movie.name : movie.title}
                                className='title-text text-center'
                            >
                            </Box>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}


export default HomeTrendingMovies;