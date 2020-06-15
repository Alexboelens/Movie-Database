import React, { Fragment } from 'react';
import noPersonImage from './images/no-person-image.png';
import noImage from './images/no-movie-image.png';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';



const FavoriteItem = ({ image, category, click, title, link }) => {

    const renderImage = category => {
        if (category === 'people') {
            return noPersonImage;
        } else {
            return noImage;
        }
    }

    return (
        <Fragment>
            <Col className='fav-wrap mt-2 mb-1' xs='12' sm='6' md='4' lg='4'>
                <Row>
                    <Col xs='4' sm='6' md='6' lg='5' className='d-flex flex-column justify-content-center'>
                        <Link to={link}>
                            <div className='fav-image mt-2' style={{ backgroundImage: image !== 'none' ? `url(${image})` : `url(${renderImage(category)})` }}></div>
                        </Link>
                        <Button size='sm' color='danger' className='my-1' onClick={click}>Delete</Button>
                    </Col>
                    <Col className='d-flex flex-column mt-3'>
                        <h5>{category === 'people' ? 'Name' : 'Title'}</h5>
                        <div>{title}</div>
                    </Col>
                </Row>
            </Col>

            {/* <Col xs='12' md='6' lg='4' className='cast-item-wrap py-3'>
                <Row>
                    <Link to={link}>
                        <Col xs='4' className='d-flex flex-column'>
                            <div className='fav-image mt-2' style={{ backgroundImage: image !== 'none' ? `url(${image}})` : `url(${renderImage(category)})` }}></div>
                            <div className='text-center'>
                                <Button size='sm' color='danger' className='my-1 del-fav-btn' onClick={click}>Delete</Button>
                            </div>
                        </Col>
                    </Link>
                    <Col>
                        <div className='cast-item-content pt-2'>
                            <div className='bold'>test</div>
                            <div className='italic pt-2'>test</div>
                        </div>
                    </Col>
                </Row>
            </Col> */}
        </Fragment>
    )
}

export default FavoriteItem;