/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { useFormWithValidation } from '../../utils/Validation';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login({ onLogin, messageInfo }) {
  const { values, errors, handleChange, resetForm, isValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values.email, values.password);
    resetForm();
  }

  return (
    <main className="login">
      <AuthForm
        isValid={isValid}
        onSubmit={handleSubmit}
        title="Рады видеть!"
        buttonText="Войти"
        linkPath="/signup"
        linkTitle="Ещё не зарегистрированы?"
        linkText="Регистрация">
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

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  messageInfo: PropTypes.string.isRequired,
};

export default Login;
