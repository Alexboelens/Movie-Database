import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';


const Pagination = ({ page, totalResults, totalPages, changePage }) => {
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <div className='flex justify-content-center align-items-center'>
                        <Button onClick={() => changePage(1)}
                            disabled={page === 1}
                            color='primary'>
                            First
                        </Button>

                        <Button onClick={() => changePage('prev')}
                            disabled={page === 1}
                            color='primary'
                            className='ml-1'>
                            Prev
                        </Button>

                        <div className='page-number-wrap'>
                            <div className='mx-5 bold'>{page}</div>
                        </div>

                        <Button onClick={() => changePage('next')}
                            disabled={page === totalPages && true}
                            color='primary'
                            className='mr-1'>
                            Next
                        </Button>

                        <Button onClick={() => changePage(totalPages)}
                            disabled={page === totalPages && true}
                            color='primary'>
                            Last
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mt-5 bold'>
                    <p>Pages: {totalPages}</p>
                    <p>Results Found: {totalResults}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Pagination;


