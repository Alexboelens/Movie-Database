import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-movie-image.png';
import banner from './images/moviebanner.png';


const SingleItemHeader = ({ backdrop, title, year, releaseDate, runTime, genres, status, tagLine, overview, itemImage }) => {

    const renderRuntime = num => {
        var minute = num % 60;
        var hour = (num - minute) / 60;
        return `${hour}h ${minute}m`
    }
    // remove jsx fragment
    return (<>

        <Container fluid={true}>

            <Row className='single-item-image-wrap text-light' style={{ backgroundImage: `url(${backdrop}), url(${banner})` }}>
                <Col className="opacity-wrap" fluid={true}>
                    <Row className='pt-4'>
                        <Col xs='12' md='4' lg='3' className='single-wrap-one'>
                            <div className="single-item-image" style={{ backgroundImage: `url(${itemImage}), url(${noImage})` }}></div>
                        </Col>

                        <Col xs='12' md='8' lg='9'>

                            <Row>
                                <Col sm='12' className='flex mt-3 text-warning'>
                                    <h1 className='mr-2'>{title}</h1>
                                    <h1>{`(${year})`}</h1>
                                </Col>
                                <Col sm='12'>
                                    <p className='text-muted'>{releaseDate}</p>

                                </Col>
                                <Col sm='12' className='flex'>
                                    <div>{renderRuntime(runTime)}</div>
                                    <ul className='flex'>
                                        {genres.length !== 0 && genres.map((genre, index) => (
                                            <li key={index} className='mr-5'>{genre.name}</li>
                                        ))}
                                    </ul>
                                </Col>
                                <Col sm='12' className='mt-2'>
                                    <p>Status: {status}</p>
                                    <div></div>
                                </Col>
                                <Col sm='12' className='my-3'>
                                    <h4 className='tagline'>{tagLine}</h4>
                                    <div className='mt-3'>{overview}</div>
                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Col>
            </Row>
        </Container>




        {/* <Container className='mt-5' fluid={true}>
            <Row className='single-item-image-wrap text-light' style={{ backgroundImage: `url(${backdrop}), url(${banner})` }}>
                <span className='opacity-wrap'>
                    <Col sm='12' md='3' className='single-wrap-one'>
                        <div className="single-item-image" style={{ backgroundImage: `url(${itemImage}), url(${noImage})` }}></div>
                    </Col>


                    <Col sm='12' md='9' className='pr-4'>
                        <Row>
                            <Col sm='12' className='flex mt-3 text-warning'>
                                <h1 className='mr-2'>{title}</h1>
                                <h1>{`(${year})`}</h1>
                            </Col>
                            <Col sm='12'>
                                <p className='text-muted'>{releaseDate}</p>

                            </Col>
                            <Col sm='12' className='flex'>
                                <div>{renderRuntime(runTime)}</div>
                                <ul className='flex'>
                                    {genres.length !== 0 && genres.map((genre, index) => (
                                        <li key={index} className='mr-5'>{genre.name}</li>
                                    ))}
                                </ul>
                            </Col>
                            <Col sm='12' className='mt-2'>
                                <p>Status: {status}</p>
                                <div></div>
                            </Col>
                            <Col sm='12' className='my-3'>
                                <h4 className='tagline'>{tagLine}</h4>
                                <div className='mt-3'>{overview}</div>
                            </Col>
                        </Row>
                    </Col>
                </span>
            </Row>
        </Container> */}


    </>
    )
}

export default SingleItemHeader;