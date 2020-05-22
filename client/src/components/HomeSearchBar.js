import React from 'react';
import { Container, Row, Col, Input, Form, FormGroup, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const query = this.state.search.toLowerCase();
        this.props.history.push(`/search/${query}`);
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col className='home-searchbar-wrap'>
                        <Form onSubmit={this.handleSubmit}>
                            <Container>
                                <FormGroup className='py-1 d-flex'>
                                    <Input
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder="Search here for your favorite Movie, TV Show or Person"
                                        onChange={this.handleChange}
                                        value={this.state.search}
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
}

export default withRouter(SearchBar);