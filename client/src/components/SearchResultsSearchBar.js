import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { getSearchResults } from '../actions/searchActions';


const SearchResultSearchBar = ({ history, onClick, getSearchResults }) => {
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
        setInput('')
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

const mapStateToProps = state => ({
    searchResults: state.search.searchResults,
    searchResultsAreLoaded: state.search.searchResultsAreLoaded
})

export default withRouter(connect(mapStateToProps, { getSearchResults })(SearchResultSearchBar));