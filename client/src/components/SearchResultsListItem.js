import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const SearchResultsListItem = ({ item, title, content, noImage }) => {

    const renderLink = item => {
        if (item.media_type === 'person') {
            return `/people/${item.id}`
        } else if (item.media_type === 'tv') {
            return `/tv/${item.id}`
        } else {
            return `/movies/${item.id}`
        }
    }

    const renderImages = item => {
        if (item.media_type === 'person' && item.profile_path !== null) {
            return item.profile_path;
        } else if (item.media_type === 'tv' && item.profile_path !== null) {
            return item.poster_path;
        } else {
            return item.poster_path;
        }
    }

    const renderDate = item => {
        if (item.media_type === 'person' && item.known_for_department) {
            return item.known_for_department !== null && item.known_for_department;
        } else if (item.media_type === 'tv' && item.first_air_date) {
            return item.first_air_date !== null && item.first_air_date.split('-').reverse().join('-');
        } else {
            return item.release_date && item.release_date.split('-').reverse().join('-');
        }
    }

    return (
        <Container className='list-item-wrap'>
            <Row>
                <Col xs='2' lg='1' className='list-item-box1 mx-3' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${renderImages(item)}), url(${noImage})` }}>
                    <Link to={renderLink(item)}>
                        <div className='image-link'>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Row>
                        <Col className='bold'>
                            <Link to={renderLink(item)} id='link'>
                                {title}
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='date'>{renderDate(item)}</Col>
                    </Row>
                    <Row>
                        <Col className='overflow pt-4'>{content}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResultsListItem;



