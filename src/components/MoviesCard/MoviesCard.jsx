import React from 'react';
import './MoviesCard.css';
import PropTypes from 'prop-types';

function MoviesCard({ image, title, duration }) {
  return (
    <li className="movie-card">
      <img className="movie-card__image" src={image} alt="Обложка фильма" />

      <div className="movie-card_container">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__duration">{duration}</p>
        </div>
        <button type="button" aria-label="Save" className="movie-card__save-button" />
      </div>
    </li>
  );
}

MoviesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default MoviesCard;
