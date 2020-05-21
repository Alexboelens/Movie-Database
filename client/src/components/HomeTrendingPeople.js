import React from 'react';
import { connect } from 'react-redux';
import { getTrendingPeople } from '../actions/peopleActions';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-person-image.png'


class HomeTrendingPeople extends React.Component {

    componentDidMount() {
        this.props.getTrendingPeople();
    }


    render() {
        return (
            <Container>
                {this.props.trendingPeopleAreLoaded &&
                    <Row>
                        <Col>
                            <h4 className='py-3'>Trending People</h4>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col className='movie-scroller mb-5'>
                        {this.props.trendingPeopleAreLoaded &&
                            this.props.trendingPeople.results.map(item => {
                                return <Box
                                    noImage={noImage}
                                    image={item.profile_path !== null && `https://image.tmdb.org/t/p/original${item.profile_path}`}
                                    key={item.id}
                                    link={`/people/${item.id}`}
                                    title={item.name}>
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
    trendingPeople: state.people.trendingPeople,
    trendingPeopleAreLoaded: state.people.trendingPeopleAreLoaded
})

export default connect(mapStateToProps, { getTrendingPeople })(HomeTrendingPeople);