import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Button, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { getSearchResults } from '../actions/searchActions';



class SearchResultSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisabled = this.handleDisabled.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDisabled() {
        return this.state.search === '' ? true : false;
    }

    handleSubmit(e) {
        e.preventDefault();
        const query = this.state.search.toLowerCase();
        this.props.history.push(`/search/${query}`);
        this.props.getSearchResults(query, 1);
        this.setState({ search: '' })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col className='searchbar-wrap py-4'>
                        <Form onSubmit={this.handleSubmit}>
                            <Container>
                                <FormGroup className='py-1 d-flex'>
                                    <Input
                                        type='text'
                                        name='search'
                                        id='search'
                                        placeholder='Search all categories...'
                                        onChange={this.handleChange}
                                        value={this.state.search}
                                    />
                                    <Button disabled={this.handleDisabled()} type='submit' value='submit' color='primary' onClick={this.props.onClick}>Search</Button>
                                </FormGroup>
                            </Container>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
    searchResults: state.search.searchResults,
    searchResultsAreLoaded: state.search.searchResultsAreLoaded
})

export default withRouter(connect(mapStateToProps, { getSearchResults })(SearchResultSearchBar));