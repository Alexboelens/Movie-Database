import React from 'react';
import { connect } from 'react-redux';
import { getTrendingMovies } from '../actions/movieActions';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-movie-image.png';


class HomeTrendingMovies extends React.Component {

    componentDidMount() {
        this.props.getTrendingMovies();
    }


    render() {
        return (
            <Container>
                {this.props.trendingMoviesAreLoaded &&
                    <Row>
                        <Col>
                            <h4 className='py-3'>Trending Movies</h4>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col className='scroller'>
                        {this.props.trendingMoviesAreLoaded &&
                            this.props.trendingMovies.results.map(movie => {
                                return <Box
                                    key={movie.id}
                                    noImage={noImage}
                                    image={movie.poster_path !== null && `https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    link={`movies/${movie.id}`}
                                    title={movie.name ? movie.name : movie.title}>
                                </Box>
                            })
                        }
                    </Col>
                </Row>
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    trendingMovies: state.movies.trendingMovies,
    trendingMoviesAreLoaded: state.movies.trendingMoviesAreLoaded
})

export default connect(mapStateToProps, { getTrendingMovies })(HomeTrendingMovies);