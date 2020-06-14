import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import SearchContext from '../context/search/searchContext';

const SearchResultSearchBar = ({ history }) => {
    const searchContext = useContext(SearchContext);
    const { onClick, getSearchResults } = searchContext;

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleDisabled = () => {
        return input === '' ? true : false;
    }

    const handleSubmit = e => {
        e.preventDefault();
        const query = input.toLowerCase();
        history.push(`/search/${query}`);
        getSearchResults(query, 1);
        setInput('');
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col className='searchbar-wrap py-4'>
                    <Form onSubmit={handleSubmit}>
                        <Container>
                            <FormGroup className='py-1 d-flex'>
                                <Input
                                    type='text'
                                    name='search'
                                    id='search'
                                    placeholder='Search all categories...'
                                    onChange={handleChange}
                                    value={input}
                                />
                                <Button disabled={handleDisabled()} type='submit' value='submit' color='primary' onClick={onClick}>Search</Button>
                            </FormGroup>
                        </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(SearchResultSearchBar);