import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import movies from '../../utils/moviesList';

function MoviesCardList() {
  return (
    <section className="movie-cards">
      <ul className="movie-cards__list">
        {movies.map((movie) => (
          <MoviesCard
            key={movie._id}
            title={movie.title}
            image={movie.image}
            duration={movie.duration}
          />
        ))}
      </ul>

    </section>
  );
}

export default MoviesCardList;
