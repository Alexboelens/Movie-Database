import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';



const SingleReviews = ({ reviewArray, mainTitle }) => {
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <h3>{mainTitle}</h3>
                    </Col>
                </Row>
                {reviewArray.length === 0 &&
                    <Row className='mt-3 mb-5'>
                        <Col>
                            <p>No reviews added for this movie.</p>
                        </Col>
                    </Row>
                }
            </Container>

            {!open && reviewArray.length !== 0 &&
                <Container className='review-wrap mt-5 mb-3'>
                    <div>
                        <h5 className='bold text-danger ml-4 pt-3'>Review by {reviewArray[0].author}</h5>
                        <ul className='py-4 px-4'>
                            <li>{reviewArray[0].content}</li>
                        </ul>
                    </div>
                </Container>
            }

            {open && reviewArray.length > 1 && reviewArray.map(item => (
                <Container className='review-wrap mt-5 mb-3' key={item.id}>
                    <div>
                        <h5 className='bold pt-3 text-danger ml-4 pt-3'>Review by {item.author}</h5>
                        <ul ul className='px-4 py-4' >
                            <li>{item.content}</li>
                        </ul>
                    </div>
                </Container>
            ))
            }
            {
                reviewArray.length > 1 &&
                <Container className='py-3 mb-5'>
                    <Button className='load-more' onClick={toggle}>{!open ? 'Load More Reviews' : 'Close'}</Button>
                </Container>
            }
        </div>
    )
}

export default SingleReviews;