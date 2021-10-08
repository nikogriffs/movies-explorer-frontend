import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Register.css';

function Register() {
  return (
    <main className="register">
      <AuthForm
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkPath="/signin"
        linkTitle="Уже зарегистрированы?"
        linkText="Войти"
      >

        <label htmlFor="name" className="auth-form__label">
          Имя
          <input
            className="auth-form__input"
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            required
            minLength={2}
            maxLength={40}
          />
        </label>

        <label htmlFor="email" className="auth-form__label">
          E-mail
          <input
            className="auth-form__input"
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            required
          />
        </label>

        <label htmlFor="password" className="auth-form__label">
          Пароль
          <input
            className="auth-form__input"
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            required
            minLength={8}
          />
          <span className="auth-form__error">Что-то пошло не так...</span>
        </label>

      </AuthForm>
    </main>
  );
}

export default Register;
