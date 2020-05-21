import React from 'react';
import { connect } from 'react-redux';
import { getTrendingTvShows } from '../actions/tvShowActions';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';


class HomeTrendingTvShows extends React.Component {

    componentDidMount() {
        this.props.getTrendingTvShows();
    }


    render() {
        console.log(this.props.trendingTvShows.results)
        console.log(this.props.trendingTvShowsAreLoaded)
        return (
            <Container>
                <Row>
                    <Col>
                        <h4 className='py-3'>Trending TV Shows</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='movie-scroller'>
                        {!this.props.trendingTvShowsAreLoaded ? <h1>loading....</h1> :
                            this.props.trendingTvShows.results.map(item => {
                                return <Box
                                    image={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                    key={item.id}
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