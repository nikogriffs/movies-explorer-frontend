import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  sizeWindow,
  totalMovies,
  totalMoreMovies,
  URL,
} from '../../../utils/constants';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  isSavedMovies,
  onLikeClick,
  onDeleteClick,
  savedMoviesId,
}) {
  const location = useLocation();
  const [numberMovies, setNumberMovies] = React.useState(0);
  const [numberMoreMovies, setNumberMoreMovies] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => setWindowWidth(window.innerWidth), 1000);
    });

    if (windowWidth > sizeWindow.large) {
      setNumberMovies(totalMovies.max_desktop);
      setNumberMoreMovies(totalMoreMovies.max_desktop);
    } else if (
      windowWidth > sizeWindow.medium &&
      windowWidth <= sizeWindow.large
    ) {
      setNumberMovies(totalMovies.min_desktop);
      setNumberMoreMovies(totalMoreMovies.min_desktop);
    } else if (
      windowWidth >= sizeWindow.small &&
      windowWidth <= sizeWindow.medium
    ) {
      setNumberMovies(totalMovies.max_tablet);
      setNumberMoreMovies(totalMoreMovies.max_tablet);
    } else {
      setNumberMovies(totalMovies.max_mobile);
      setNumberMoreMovies(totalMoreMovies.max_mobile);
    }

    return () =>
      window.removeEventListener('resize', () => {
        setTimeout(() => setWindowWidth(window.innerWidth), 1000);
      });
  }, [windowWidth]);

  function handleAddMoreMovies() {
    setNumberMovies(numberMovies + numberMoreMovies);
  }

  return (
    <section className="movie-cards">
      <ul className="movie-cards__list">
        {location.pathname === '/movies'
          ? movies.slice(0, numberMovies).map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                image={`${URL.BASE_URL}${movie.image.url}`}
                trailer={
                  // eslint-disable-next-line no-nested-ternary
                  movie.trailerLink
                    ? movie.trailerLink.startsWith('https')
                      ? movie.trailerLink
                      : `${URL.YOUTUBE_URL}`
                    : `${URL.YOUTUBE_URL}`
                }
                onLikeClick={onLikeClick}
                onDeleteClick={onDeleteClick}
                isSavedMovies={isSavedMovies}
                isSaved={savedMoviesId.includes(movie.id)}
              />
            ))
          : movies.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                image={movie.image}
                trailer={movie.trailer}
                onLikeClick={onLikeClick}
                onDeleteClick={onDeleteClick}
                isSavedMovies={isSavedMovies}
              />
            ))}
      </ul>

      {!isSavedMovies && movies.length > numberMovies && (
        <button
          type="button"
          className="movie-cards__button button"
          onClick={handleAddMoreMovies}>
          Ещё
        </button>
      )}
    </section>
  );
}

MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  savedMoviesId: PropTypes.arrayOf(PropTypes.number),
};

export default MoviesCardList;
