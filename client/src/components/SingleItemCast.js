import React from 'react';
import { Card, CardTitle, CardText, CardBody, Container, Row, Col } from 'reactstrap';
import noImage from '../components/images/no-person-image.png'

const SingleItemCast = ({ mainTitle }) => {
    return (
        <Container className='my-5' fluid={true}>
            <Row>
                <Col>
                    <h3>{mainTitle}</h3>
                </Col>
            </Row>
            <Row className='scroller'>
                <Col md='2'>
                    <Card>
                        <div className="person-card" style={{ backgroundImage: `url(${noImage})` }}></div>
                        <CardBody>
                            <CardTitle>Actor Name</CardTitle>
                            <CardText>Role in Movie role role orle</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}

export default SingleItemCast;