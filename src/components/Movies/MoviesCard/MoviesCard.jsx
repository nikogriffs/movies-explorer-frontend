import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.css';

function MoviesCard({
  movie,
  isSavedMovies,
  onLikeClick,
  onDeleteClick,
  isSaved,
  image,
  trailer,
}) {
  const deleteButtonClassName = 'button movie-card__delete-button';
  const saveButtonClassName = `button movie-card__save-button ${
    isSaved && 'movie-card__save-button_active'
  }`;

  function handleSaveClick() {
    onLikeClick(movie);
  }

  function handleDeleteClick() {
    onDeleteClick(movie);
  }

  function getTimeFromDuration() {
    const hours = Math.trunc(movie.duration / 60);
    const minutes = movie.duration % 60;
    return `${hours}ч${minutes}м`;
  }

  return (
    <li className="movie-card">
      <a href={trailer} target="_blank" rel="noreferrer">
        <img className="movie-card__image" src={image} alt={movie.nameRU} />
      </a>

      <div className="movie-card_container">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{movie.nameRU}</h2>
          <p className="movie-card__duration">{getTimeFromDuration()}</p>
        </div>

        {isSavedMovies ? (
          <button
            type="button"
            aria-label="Delete"
            className={deleteButtonClassName}
            onClick={handleDeleteClick}
          />
        ) : (
          <button
            type="button"
            aria-label="Save"
            className={saveButtonClassName}
            onClick={isSaved ? handleDeleteClick : handleSaveClick}
          />
        )}
      </div>
    </li>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.shape({
    nameRU: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  isSaved: PropTypes.bool,
  trailer: PropTypes.string.isRequired,
};

export default MoviesCard;
