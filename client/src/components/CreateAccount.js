import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const CreateAccount = ({ history }) => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        msg: null
    })

    const { name, email, password, password2 } = state;

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newUser = { name, email, password };
        console.log(newUser)


    }

    return (
        <Container>
            <Container className='text-center'>
                <h3 className='my-5'>Sign up for an account</h3>
            </Container>



            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Username</Label>
                    <Input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter a Username"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        onChange={handleChange}
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        onChange={handleChange}
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Choose a password"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password2">Confirm Password</Label>
                    <Input
                        onChange={handleChange}
                        value={password2}
                        type="password"
                        name="password2"
                        id="password2"
                        placeholder="Re-enter your password"
                    />
                </FormGroup>

                <Container className='text-center'>
                    <Button
                        color='primary'
                        type='submit'
                        className='mt-4'>
                        Register
                    </Button>
                </Container>

            </Form>
        </Container>

    )
}



export default CreateAccount;