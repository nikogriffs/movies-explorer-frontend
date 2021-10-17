/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { useFormWithValidation } from '../../utils/Validation';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

function Register({ onRegister, messageInfo }) {
  const { values, errors, handleChange, resetForm, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.email, values.password, values.name);
    resetForm();
  }

  return (
    <main className="register">
      <AuthForm
        isValid={isValid}
        onSubmit={handleSubmit}
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkPath="/signin"
        linkTitle="Уже зарегистрированы?"
        linkText="Войти">
        <label htmlFor="name" className="auth-form__label">
          Имя
          <input
            className="auth-form__input"
            onChange={handleChange}
            value={values.name || ''}
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            required
            minLength={2}
            maxLength={40}
            pattern="^[a-zA-Zа-яА-ЯЁё\\ \\-]+$"
          />
          <span className="auth-form__error">{errors.name}</span>
        </label>

        <label htmlFor="email" className="auth-form__label">
          E-mail
          <input
            className="auth-form__input"
            onChange={handleChange}
            value={values.email || ''}
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            required
            pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
          />
          <span className="auth-form__error">{errors.email}</span>
        </label>

        <label htmlFor="password" className="auth-form__label">
          Пароль
          <input
            className="auth-form__input"
            onChange={handleChange}
            value={values.password || ''}
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            required
            minLength={8}
          />
          <span className="auth-form__error">{errors.password}</span>
        </label>
        <span className="auth-form__message">{messageInfo}</span>
      </AuthForm>
    </main>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
  messageInfo: PropTypes.string.isRequired,
};

export default Register;
