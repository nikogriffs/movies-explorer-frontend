import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import './Movies.css';

function Movies({
  movies,
  isSavedMovies,
  loggedIn,
  searchMovies,
  onLikeClick,
  onDeleteClick,
  savedMoviesId,
  onCheckboxClick,
  checked,
  isLoading,
  messageInfo,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          searchMovies={searchMovies}
          onCheckboxClick={onCheckboxClick}
          checked={checked}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {messageInfo ? (
              <span className="movies-message">{messageInfo}</span>
            ) : (
              <MoviesCardList
                movies={movies}
                isSavedMovies={isSavedMovies}
                onLikeClick={onLikeClick}
                onDeleteClick={onDeleteClick}
                savedMoviesId={savedMoviesId}
              />
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  searchMovies: PropTypes.func.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  savedMoviesId: PropTypes.arrayOf(PropTypes.number).isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  messageInfo: PropTypes.string.isRequired,
};

export default Movies;
