import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie'; // Added to handle CSRF tokens

// Styled Components
const RegisterContainer = styled.div`
  background-color: #272932;  /* Raisin black */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #E7ECEF; /* Anti-flash white */
`;

const FormWrapper = styled.div`
  background-color: #0F7173;  /* Caribbean Current */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #E7ECEF; /* Anti-flash white */
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  border: 2px solid #E7ECEF; /* Anti-flash white */
  border-radius: 10px;
  background-color: #E7ECEF;
  font-size: 16px;
  color: #272932; /* Raisin black */
  box-sizing: border-box;

  &:focus {
    border-color: #0F7173; /* Caribbean Current */
    outline: none;
    box-shadow: 0px 0px 8px rgba(15, 113, 115, 0.5); /* Caribbean Current */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #F05D5E; /* Bittersweet */
  color: #E7ECEF; /* Anti-flash white */
  font-size: 18px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #D8A47F; /* Buff */
  }
`;

const ErrorMessage = styled.p`
  color: #F05D5E; /* Bittersweet */
  text-align: center;
`;

const SuccessMessage = styled.p`
  color: #0F7173; /* Caribbean Current */
  text-align: center;
`;

const BackToLogin = styled.p`
  text-align: center;
  margin-top: 15px;
  color: #E7ECEF; /* Anti-flash white */
`;

// Register Component
const Register = () => {
  // State for form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [error, setError] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const navigate = useNavigate();

  // Destructure form data
  const { username, email, password, password2 } = formData;

  // Handle form input change
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== password2) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    // Clear previous errors
    setPasswordMatchError('');
    setError('');

    // CSRF Token handling
    const csrftoken = Cookies.get('csrftoken');

    try {
      // Send registration request
      const response = await axios.post(
        'http://localhost:8000/auth/register/',
        { username, email, password, password2 },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
          },
        }
      );

      // Store tokens and redirect to home
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred during registration');
      }
    }
  };

  return (
    <RegisterContainer>
      <FormWrapper>
        <FormTitle>Register</FormTitle>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
          <InputField
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={password2}
            onChange={onChange}
            required
          />
          {passwordMatchError && <ErrorMessage>{passwordMatchError}</ErrorMessage>}
          <SubmitButton type="submit">Register</SubmitButton>
        </form>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <BackToLogin>
          Already have an account? <Link to="/login" style={{ color: '#F05D5E' }}>Log in here</Link>
        </BackToLogin>
      </FormWrapper>
    </RegisterContainer>
  );
};

export default Register;
