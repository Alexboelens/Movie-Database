import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'reactstrap'
import Pagination from './Pagination';
import CastItem from './CastItem';
import PeopleContext from '../context/people/peopleContext';


const PopularPeople = () => {
    const peopleContext = useContext(PeopleContext);
    const { popularLoaded, popularPeople, getPopularPeople } = peopleContext;

    const [page, setPage] = useState(1);

    useEffect(() => {
        getPopularPeople(page);
        window.scrollTo({ top: 0, behavior: 'auto' });
        // eslint-disable-next-line
    }, [page])

    const changePage = async pageNum => {
        if (pageNum === 'next') {
            await setPage(page + 1);
        } else if (pageNum === 'prev') {
            await setPage(page - 1);
        } else {
            await setPage(pageNum);
        }
    }

    return (
        <div>
            {popularLoaded &&
                <div>
                    <Container className='text-center mt-4 mb-5'>
                        <h1 onClick={changePage}>Popular People</h1>
                    </Container>

                    <CastItem
                        array={popularPeople.results}
                    />

                    <Pagination
                        page={page}
                        totalPages={popularPeople.total_pages}
                        totalResults={popularPeople.total_results}
                        changePage={changePage}
                    />
                </div>
            }
        </div>
    )
}

export default PopularPeople;

