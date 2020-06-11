import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';

const Register = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors } = authContext;

    useEffect(() => {
        if (error && error.includes('exists')) {
            setAlert(error, 'danger');
            clearErrors();
        }

    }, [error, clearErrors, setAlert])

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
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
        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger')
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {
            register({
                name,
                email,
                password
            });
        }
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
                        required
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
                        required
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
                        minLength='6'
                        required
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
                        minLength='6'
                        required
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



export default Register;