import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';  // Import useDispatch
import { login } from '../../slices/authSlice';  // Import login slice

// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #0F7173; // Caribbean Current
`;

const Title = styled.h2`
    color: #E7ECEF; // Anti-flash white
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #272932; // Raisin black
    border-radius: 5px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #F05D5E; // Bittersweet
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #D8A47F; // Buff
    }
`;

const Error = styled.p`
    color: red;
`;

const RegisterLink = styled.p`
    margin-top: 10px;
    color: #272932; // Raisin black

    a {
        color: #F05D5E; // Bittersweet
        text-decoration: none;

        &:hover {
            color: #D8A47F; // Buff
        }
    }
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();  // Initialize dispatch

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/auth/login/', {
                username,
                password,
            });
            const { access, refresh } = response.data;
            dispatch(login({ accessToken: access, refreshToken: refresh })); // Dispatch the login action
            setError('');
            navigate('/');  // Redirect to home page after successful login
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </Form>
            {error && <Error>{error}</Error>}
            <RegisterLink>
                Don't have an account? <Link to="/register">Register here</Link>
            </RegisterLink>
        </Container>
    );
};

export default Login;