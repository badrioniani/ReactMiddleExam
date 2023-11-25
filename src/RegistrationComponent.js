import React, { useState, useRef } from 'react';
import './RegistrationComponent.css';

const RegistrationComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    nickname: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const nicknameRef = useRef();
  const passwordRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const displayError = (message) => {
    setErrorMessage(message);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateNickname = (nickname) => {
    const nicknameRegex = /^[a-z0-9]+$/;
    return nicknameRegex.test(nickname);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const register = () => {
    displayError('');

    const name = nameRef.current.value.trim();
    const surname = surnameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const nickname = nicknameRef.current.value.trim();
    const password = passwordRef.current.value;

    if (!validateName(name) || name === '') {
      displayError('Name must contain only letters of the Latin alphabet and must not be empty.');
      return;
    }

    if (!validateName(surname) || surname === '') {
      displayError('Surname must contain only letters of the Latin alphabet and must not be empty.');
      return;
    }

    if (!validateEmail(email) || email === '') {
      displayError('Invalid email format or email is empty.');
      return;
    }

    if (!validateNickname(nickname) || nickname === '') {
      displayError('Nickname must contain only lowercase letters and numbers and must not be empty.');
      return;
    }

    if (!validatePassword(password) || password === '') {
      displayError('Password must be at least 8 characters long and contain at least 1 digit.');
      return;
    }

    alert('Registration successful!');
    setFormData({
      name: '',
      surname: '',
      email: '',
      nickname: '',
      password: '',
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          ref={nameRef}
        />

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          ref={surnameRef}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          ref={emailRef}
        />

        <label htmlFor="nickname">Nickname:</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
          ref={nicknameRef}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          ref={passwordRef}
        />

        <button type="button" onClick={register}>
          Register
        </button>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default RegistrationComponent;
