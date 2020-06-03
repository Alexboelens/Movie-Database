import React from 'react';
import { Card, CardText, CardBody, Container, Row, Col } from 'reactstrap';
import noImage from '../components/images/no-person-image.png'
import { Link } from 'react-router-dom';


const SingleItemCast = ({ mainTitle, castArray, topCast, type }) => {
    const id = window.location.pathname.split('/')[2];
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <div className='flex'>
                        <h3 className='mr-auto'>{mainTitle}</h3>
                        {castArray.length > 6 &&
                            <Link to={`/${type}/${id}/cast`}><p className='pr-5 bold'>View All >></p></Link>
                        }
                    </div>
                </Col>
            </Row>
            <Row className='scroller'>
                {topCast && topCast.length !== 0 ? topCast.map(item => (
                    <Col xs='6' sm='6' md='4' lg='2' key={item.id} className='mt-3'>
                        <Card>
                            <Link to={`/people/${item.id}`} >
                                <div className="person-card" style={{ backgroundImage: item.profile_path !== null ? `url(https://image.tmdb.org/t/p/original${item.profile_path})` : `url(${noImage})` }}></div>
                            </Link>
                            <CardBody>
                                <div className="actor-info">
                                    <CardText className='bold'>{item.name}</CardText>
                                    <CardText className='italic'>{item.character}</CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                )) : <div className='ml-3'>No actors added yet for this title</div>}
            </Row>
        </Container>
    )
}

export default SingleItemCast;
