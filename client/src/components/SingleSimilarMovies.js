import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import WideBox from './WideBox';
import noImage from './images/no-movie-image.png';


const SingleSimilarMovies = ({ mainTitle }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>{mainTitle}</h3>
                </Col>
            </Row>
            <Row className='trailer-wrap'>
                <Col md='4' className='scroller'>

                    <WideBox
                        link=''
                        image=''
                        noImage={noImage}
                        title='movie name'
                    />





                </Col>
            </Row>
        </Container>
    )

}

export default SingleSimilarMovies;