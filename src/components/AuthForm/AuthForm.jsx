import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './AuthForm.css';

function AuthForm({
  title, buttonText, linkTitle, linkText, linkPath, children,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="auth">
      <div className="auth__logo-container">
        <Logo />
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <fieldset className="auth-form__fieldset">
          <legend className="auth-form__title">{title}</legend>
          {children}
        </fieldset>
        <button type="submit" className="auth-form__button button">{buttonText}</button>
      </form>

      <div className="auth__redirect">
        <span>{linkTitle}</span>
        <Link className="auth__redirect-link link" to={linkPath}>{linkText}</Link>
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
};

export default AuthForm;
