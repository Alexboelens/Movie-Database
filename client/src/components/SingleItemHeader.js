import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import noImage from './images/no-movie-image.png';
import banner from './images/moviebanner.png';


const SingleItemHeader = ({ children, backdrop, title, year, releaseDate, runTime, genres, status, tagLine, overview, itemImage, type, numSeasons, numEpisodes }) => {
    const renderRuntime = num => {
        var minute = num % 60;
        var hour = (num - minute) / 60;
        return `${hour}h ${minute}m`
    }

    return (
        <Container fluid={true}>
            <Row className='single-item-image-wrap text-light' style={{ backgroundImage: backdrop ? `url(${backdrop})` : `url(${banner})` }}>
                <Col className="opacity-wrap">
                    <Row className='pt-4'>
                        <Col xs='12' md='4' lg='3' className='single-wrap-one d-flex flex-column'>
                            <div className="single-item-image" style={{ backgroundImage: itemImage ? `url(${itemImage})` : `url(${noImage})` }}></div>
                            {children}
                        </Col>
                        <Col xs='12' md='8' lg='9'>
                            <Row>
                                <Col className='flex mt-3 text-warning'>
                                    <h1 className='mr-2'>{title}</h1>
                                    <h1>{`(${year && year.split('-')[0]})`}</h1>
                                </Col>
                            </Row>
                            <p className='release-date'>{releaseDate && releaseDate.split('-').reverse().join('-')}</p>
                            {type !== 'tv' && runTime !== 0 && <p className='mr-3'>{renderRuntime(runTime)}</p>}
                            <div className='flex'>
                                {genres.length !== 0 && genres.map((genre, index) => (
                                    <p key={index} className='mr-5'>{genre.name}</p>
                                ))}
                            </div>
                            {numEpisodes && <p>Episodes: {numEpisodes}</p>}
                            {numSeasons && <p>Seasons: {numSeasons}</p>}
                            <p>Status: {status}</p>
                            <h4 className='tagline'>{tagLine}</h4>
                            <div className='mt-3'>{overview}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleItemHeader;




