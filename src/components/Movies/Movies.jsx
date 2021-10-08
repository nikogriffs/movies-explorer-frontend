import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import './Movies.css';

function Movies({ movies, isSavedMovies, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="movies">
        <SearchForm />
        <MoviesCardList movies={movies} isSavedMovies={isSavedMovies} />
      </main>

      <Footer />
    </>

  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Movies;
