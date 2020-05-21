import React from 'react';
import { connect } from 'react-redux';
import { getTrendingMovies } from '../actions/movieActions';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';


class HomeTrendingMovies extends React.Component {

    componentDidMount() {
        this.props.getTrendingMovies();
    }


    render() {
        console.log(this.props.trendingMovies.results)
        return (
            <Container>
                <Row>
                    <Col>
                        <h4 className='py-3'>Trending Movies</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='movie-scroller'>
                        {!this.props.trendingMoviesAreLoaded ? <h1>loading....</h1> :
                            this.props.trendingMovies.results.map(movie => {
                                return <Box
                                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    key={movie.id}
                                    title={movie.name ? movie.name : movie.title}>
                                </Box>
                            })
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    trendingMovies: state.movies.trendingMovies,
    trendingMoviesAreLoaded: state.movies.trendingMoviesAreLoaded
})

export default connect(mapStateToProps, { getTrendingMovies })(HomeTrendingMovies);