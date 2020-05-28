import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-movie-image.png';
import WideBox from './WideBox';


const SingleRecommendations = ({ mainTitle }) => {
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <h3>{mainTitle}</h3>
                </Col>
            </Row>
            <Row className='trailer-wrap'>
                <Col md='4' className='scroller'>

                    <WideBox
                        title='movie name'
                        noImage={noImage}
                    />





                </Col>
            </Row>
        </Container>
    )

}

export default SingleRecommendations;