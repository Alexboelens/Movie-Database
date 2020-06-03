import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import noImage from './images/no-movie-image.png';


const SinglePersonRoles = ({ mainTitle, array }) => {
    return (
        <Container className='pt-2 mb-5'>
            <Row>
                <Col>
                    <h3>{mainTitle}</h3>
                </Col>
            </Row>
            <Row>
                {array.map((item, index) => (
                    <Col xs='12' md='6' lg='4' className='mb-4' key={index}>
                        <div className='roles-wrap'>
                            <Link to={`/movies/${item.id}`}>
                                <div className="roles-image" style={{ backgroundImage: item.poster_path !== null ? `url(https://image.tmdb.org/t/p/original/${item.poster_path})` : `url(${noImage})` }}></div>
                            </Link>
                            <div className="roles-content-wrap pl-3 pt-2">
                                <p className='bold'>Title</p>
                                <p className="italic">{item.title}</p>
                                <p className='bold'>Character played</p>
                                <p className="italic">{item.character ? item.character : 'Unknown'}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default SinglePersonRoles;