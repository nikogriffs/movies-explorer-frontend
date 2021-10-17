import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();

  function goBack() {
    history.go(-2);
  }

  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__error">404</h1>
        <p className="page-not-found__message">Страница не найдена</p>
      </div>

      <button
        className="page-not-found__button button"
        type="button"
        onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
