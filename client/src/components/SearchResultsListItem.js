import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const SearchResultsListItem = props => {
    return (
        <Container className='list-item-wrap'>
            <Row>
                <Col xs='2' lg='1' className='list-item-box1 mx-3' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${props.image}), url(${props.noImage})` }}></Col>

                <Col>
                    <Row>
                        <Col className='bold'>{props.title}</Col>
                    </Row>
                    <Row>
                        <Col className='date'>{props.date}</Col>
                    </Row>
                    <Row>
                        <Col className='overflow pt-4'>{props.content}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchResultsListItem;



