import React from 'react';
import { connect } from 'react-redux';
import { getTrendingTvShows } from '../actions/tvShowActions';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-movie-image.png';


class HomeTrendingTvShows extends React.Component {

    componentDidMount() {
        this.props.getTrendingTvShows();
    }


    render() {
        return (
            <Container>
                {this.props.trendingTvShowsAreLoaded &&
                    <Row>
                        <Col>
                            <h4 className='py-3'>Trending TV Shows</h4>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col className='scroller'>
                        {this.props.trendingTvShowsAreLoaded &&
                            this.props.trendingTvShows.results.map(item => {
                                return <Box
                                    noImage={noImage}
                                    image={item.poster_path !== null && `https://image.tmdb.org/t/p/original${item.poster_path}`}
                                    key={item.id}
                                    link={`/tv-shows/${item.id}`}
                                    title={item.name ? item.name : item.original_name}>
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
    trendingTvShows: state.tvShows.trendingTvShows,
    trendingTvShowsAreLoaded: state.tvShows.trendingTvShowsAreLoaded
})

export default connect(mapStateToProps, { getTrendingTvShows })(HomeTrendingTvShows);