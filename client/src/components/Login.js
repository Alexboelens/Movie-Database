import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const { email, password } = state;

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('login')
    }

    return (
        <Container>
            <Container className='text-center'>
                <h3 className='my-5'>Login</h3>
            </Container>

            <Form onSubmit={handleSubmit}>
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



export default Login;