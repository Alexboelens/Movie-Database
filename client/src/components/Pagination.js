import React from 'react';
import { Pagination as RSPagination, PaginationItem, PaginationLink, Container, Row, Col } from 'reactstrap';

const Pagination = props => {
    const pageNumbers = [];

    for (let i = 0; i < props.totalPages; i++) {
        pageNumbers.push([i + 1]);
    }



    return (
        <Container className="pagination-container my-5">
            <div className="pagination-wrap">
                <RSPagination>
                    <PaginationItem>
                        <PaginationLink first />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous />
                    </PaginationItem>
                    <Container className="scroller">
                        {pageNumbers.map(page => (
                            <PaginationItem
                                key={page}
                                active={props.pageNumber.toString() === page.toString() && true}
                            >
                                <PaginationLink onClick={() => props.paginate(page)}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                        }
                    </Container>
                    <PaginationItem>
                        <PaginationLink next />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last />
                    </PaginationItem>
                </RSPagination >
            </div>


            {/* fix styling text */}
            <Container>
                <Row>
                    <Col>  Pages: {props.numPages}</Col>
                    <Col> Results: {props.totalResults}</Col>
                </Row>
            </Container>






        </Container >

    )
}

export default Pagination;