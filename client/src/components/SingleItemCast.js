import React from 'react';
import { Card, CardTitle, CardText, CardBody, Container, Row, Col } from 'reactstrap';
import noImage from '../components/images/no-person-image.png'
import { Link } from 'react-router-dom';


const SingleItemCast = ({ mainTitle, castArray, topCast }) => {
    const id = window.location.pathname.split('/')[2];
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <div className='flex'>
                        <h3 className='mr-auto'>{mainTitle}</h3>
                        {castArray.length > 6 &&
                            <Link to={`/movies/${id}/cast`}><p className='pr-5 bold'>View All >></p></Link>
                        }
                    </div>
                </Col>
            </Row>
            <Row className='scroller'>
                {topCast.map(item => (
                    <Col xs='6' sm='6' md='4' lg='2' key={item.id} className='mt-3 scroller'>
                        <Card>
                            <Link to={`/people/${item.id}`} >
                                <div className="person-card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.profile_path}), url(${noImage})` }}></div>
                            </Link>
                            <CardBody className='actor-info'>
                                <div className="actor-info">
                                    <CardTitle className='bold'>{item.name}</CardTitle>
                                    <CardText className='italic'>{item.character}</CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default SingleItemCast;
