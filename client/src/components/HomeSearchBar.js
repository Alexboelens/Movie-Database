import React, { useState } from 'react';
import { Container, Row, Col, Input, Form, FormGroup, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const SearchBar = ({ history }) => {
    const [search, setSearch] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const query = search.toLowerCase();
        history.push(`/search/${query}`);
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col className='home-searchbar-wrap'>
                    <Form onSubmit={handleSubmit}>
                        <Container>
                            <FormGroup className='py-1 d-flex'>
                                <Input
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="Search here for your favorite Movie, TV Show or Person"
                                    onChange={handleChange}
                                    value={search}
                                />
                                <Button type='submit' value='submit' color='primary'>Search</Button>
                            </FormGroup>
                        </Container>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default withRouter(SearchBar);