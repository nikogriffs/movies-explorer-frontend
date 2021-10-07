import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

import movies from '../../utils/moviesDB';

import './App.css';

function App() {
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    setSavedMovies(movies.filter((movie) => movie.saved));
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main loggedIn />
        </Route>

        <Route path="/movies">
          <Movies movies={movies} isSavedMovies={false} loggedIn />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies movies={savedMovies} isSavedMovies loggedIn />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/profile">
          <Profile loggedIn />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
