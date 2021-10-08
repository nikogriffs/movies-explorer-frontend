import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

function Login() {
  return (
    <main className="login">
      <AuthForm
        title="Рады видеть!"
        buttonText="Войти"
        linkPath="/signup"
        linkTitle="Ещё не зарегистрированы?"
        linkText="Регистрация"
      >

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
        </label>

      </AuthForm>
    </main>
  );
}

export default Login;
