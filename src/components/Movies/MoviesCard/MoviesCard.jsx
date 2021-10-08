import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.css';

function MoviesCard({ movie, isSavedMovies }) {
  const [isSaved, setIsSaved] = React.useState(movie.saved);
  const deleteButtonClassName = 'button movie-card__delete-button';
  const saveButtonClassName = `button movie-card__save-button ${isSaved && 'movie-card__save-button_active'}`;

  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  function handleDeleteClick() {
    const card = document.querySelector('.movie-card');
    card.remove();
  }

  function getTimeFromDuration() {
    const hours = Math.trunc(movie.duration / 60);
    const minutes = movie.duration % 60;
    return `${hours}ч${minutes}м`;
  }

  return (
    <li className="movie-card">
      <img className="movie-card__image" src={movie.image} alt={movie.title} />

      <div className="movie-card_container">
        <div className="movie-card__info">
          <h2 className="movie-card__title">{movie.title}</h2>
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
            onClick={handleSaveClick}
          />
        )}
      </div>
    </li>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    saved: PropTypes.bool.isRequired,
  }).isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
};

export default MoviesCard;
