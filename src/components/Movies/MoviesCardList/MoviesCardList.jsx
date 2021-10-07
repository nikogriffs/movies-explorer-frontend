import React from 'react';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, isSavedMovies }) {
  return (
    <section className="movie-cards">

      <ul className="movie-cards__list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
            isSavedMovies={isSavedMovies}
          />
        ))}
      </ul>

      {!isSavedMovies && <button type="button" className="movie-cards__button button">Ещё</button>}

    </section>
  );
}

MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
};

export default MoviesCardList;
