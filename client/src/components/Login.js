import React, { useState, useContext, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import AuthContext from '../context/auth/authContext';
import AlertContext from '../context/alert/alertContext';


const Login = ({ history }) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { loginUser, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }
        if (error && error.includes('Credentials')) {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, history])

    const [state, setState] = useState({
        email: '',
        password: ''
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
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger')
        } else {
            loginUser({
                email,
                password
            })
        }
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



export default Login;