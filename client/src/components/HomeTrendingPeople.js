import React, { useEffect, useContext } from 'react';
import Box from './Box';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-person-image.png';
import PeopleContext from '../context/people/peopleContext';


const HomeTrendingPeople = () => {
    const peopleContext = useContext(PeopleContext);
    const { getTrendingPeople, trendingPeople, trendingPeopleAreLoaded } = peopleContext;

    useEffect(() => {
        getTrendingPeople();
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            {trendingPeopleAreLoaded &&
                <Row>
                    <Col>
                        <h4 className='py-3'>Trending People</h4>
                    </Col>
                </Row>
            }
            <Row>
                <Col className='scroller mb-5'>
                    {trendingPeopleAreLoaded &&
                        trendingPeople.results.map(item => {
                            return <Box
                                noImage={noImage}
                                image={item.profile_path !== null && `https://image.tmdb.org/t/p/original${item.profile_path}`}
                                key={item.id}
                                link={`/people/${item.id}`}
                                title={item.name}
                                className='title-text text-center'
                            >
                            </Box>
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default HomeTrendingPeople;