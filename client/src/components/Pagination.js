import React from 'react';
import { Pagination as RSPagination, PaginationItem, PaginationLink, Container } from 'reactstrap';

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
                        <PaginationLink first onClick={() => props.setPage(1)} href='#1' />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={props.prevPage} disabled={props.pageNumber === 1 && true} />
                    </PaginationItem>
                    <div className="scroller">
                        {pageNumbers.map(page => (
                            <PaginationItem
                                id={page}
                                key={page}
                                active={props.pageNumber.toString() === page.toString() && true}
                            >
                                <PaginationLink onClick={() => props.setPage(page)}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                        }
                    </div>
                    <PaginationItem>
                        <PaginationLink next onClick={() => props.nextPage()} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last
                            onClick={() => props.setPage(props.numPages)}
                            href={`#${props.numPages}`}
                        />
                    </PaginationItem>
                </RSPagination >
            </div>
            {props.numPages !== 0 && <div>
                <div className='bold mt-2 text-center'>  Pages: {props.numPages}</div>
                <div className='bold text-center'> Results: {props.totalResults}</div>
            </div>
            }
        </Container >

    )
}

export default Pagination;