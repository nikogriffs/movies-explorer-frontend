import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './AuthForm.css';

function AuthForm({
  onSubmit,
  title,
  buttonText,
  linkTitle,
  linkText,
  linkPath,
  children,
  isValid,
}) {
  return (
    <section className="auth">
      <div className="auth__logo-container">
        <Logo />
      </div>

      <form
        onSubmit={onSubmit}
        className="auth-form"
        noValidate
        autoComplete="off">
        <fieldset className="auth-form__fieldset">
          <legend className="auth-form__title">{title}</legend>
          {children}
        </fieldset>
        <button
          type="submit"
          className={`auth-form__button button ${
            !isValid ? 'button_disabled' : ''
          }`}>
          {buttonText}
        </button>
      </form>

      <div className="auth__redirect">
        <span>{linkTitle}</span>
        <Link className="auth__redirect-link link" to={linkPath}>
          {linkText}
        </Link>
      </div>
    </section>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default AuthForm;
