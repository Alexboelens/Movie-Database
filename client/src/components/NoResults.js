import React from 'react';
import { Container } from 'reactstrap';


const NoResults = () => {
    return (
        <Container className='text-center no-results-text'>No results matched your query, please try again.</Container>
    )
}

export default NoResults;