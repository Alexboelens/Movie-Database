import React from 'react';
import noImage from './images/no-person-image.png';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const CastItem = ({ name, image, title, array, content }) => {
    return (
        <Container>
            <Row className='mt-4'>
                <Col>
                    <h3>{title}</h3>
                </Col>
            </Row>
            <Row className='mt-2'>
                {array.map((item, index) => (

                    <Col xs='12' md='6' lg='4' className='cast-item-wrap py-3' key={index}>

                        <Row>
                            <Link to={`/people/${item.id}`}>
                                <Col xs='4'>
                                    <div className='cast-item-image' style={{ backgroundImage: item.profile_path !== null ? `url(https://image.tmdb.org/t/p/original${item.profile_path})` : `url(${noImage})` }}></div>
                                </Col>
                            </Link>
                            <Col>
                                <div className='cast-item-content pt-2'>
                                    <div className='bold'>{item.name}</div>
                                    <div className='italic pt-2'>{item.character}</div>
                                    {item.job && <div>{item.job}</div>}
                                    {item.department && <div>{item.department}</div>}
                                </div>
                            </Col>
                        </Row>

                    </Col >
                ))}

            </Row >
        </Container >


    )
}

export default CastItem;