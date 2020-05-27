import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const SingleItemHeader = ({ className }) => {



    return (
        <Container className='mt-5' fluid={true}>
            <Row className='single-item-image-wrap'>
                <Col sm='12' md='4' className='single-wrap-one'>
                    <div className="single-item-image"></div>
                </Col>



                <Col sm='12' md='8'>
                    <Row>
                        <Col className='flex'>
                            <h1>title jksahdkasd asdas dasda</h1>
                            <h1>(year)</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>release date</p>

                        </Col>
                    </Row>

                    <Row>
                        <Col className='flex'>
                            <p>runtime(hour min )  </p>
                            <p>genres</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>status</div>
                            <div>test</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>tagline</p>
                            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum aspernatur, ex mollitia qui voluptates officia magni, veniam dolore laboriosam delectus, libero enim in assumenda sapiente aut deserunt ad cupiditate sed.</h5>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>production Companies</div>
                            <div className="production-image"></div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default SingleItemHeader;