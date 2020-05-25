import React from 'react';
import { Pagination as RSPagination, PaginationItem, PaginationLink, Container } from 'reactstrap';

const Pagination = ({ changePage, numPages, totalResults, pageNumber, totalPages }) => {
    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push([i + 1]);
    }

    return (
        <Container className="pagination-container my-5">
            <div className="pagination-wrap">
                <RSPagination>
                    <PaginationItem>
                        <PaginationLink first onClick={() => changePage(1)} href='#1' disabled={pageNumber === 1 && true} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={() => changePage('prev')} disabled={pageNumber === 1 && true} />
                    </PaginationItem>
                    <div className="scroller">
                        {pageNumbers.map(page => (
                            <PaginationItem
                                id={page}
                                key={page}
                                active={pageNumber.toString() === page.toString() && true}
                            >
                                <PaginationLink onClick={() => changePage(page)}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                        }
                    </div>
                    <PaginationItem>
                        <PaginationLink next onClick={() => changePage('next')} disabled={pageNumber === numPages && true} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last disabled={pageNumber === numPages && true}
                            onClick={() => changePage(numPages)}
                            href={`#${numPages}`}
                        />
                    </PaginationItem>
                </RSPagination>
            </div>
            {numPages !== 0 && <div>
                <div className='bold mt-2 text-center'>  Pages: {numPages}</div>
                <div className='bold text-center'> Results: {totalResults}</div>
            </div>
            }
        </Container>
    )
}

export default Pagination;