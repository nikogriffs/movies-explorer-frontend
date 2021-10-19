import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../../Footer/Footer';
import Preloader from '../../Preloader/Preloader';

import './SavedMovies.css';

function SavedMovies({
  movies,
  isSavedMovies,
  loggedIn,
  searchMovies,
  onLikeClick,
  onDeleteClick,
  onCheckboxClick,
  checked,
  isLoading,
  messageInfo,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved-movies">
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
              />
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

SavedMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  searchMovies: PropTypes.func.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onCheckboxClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  messageInfo: PropTypes.string.isRequired,
};

export default SavedMovies;
