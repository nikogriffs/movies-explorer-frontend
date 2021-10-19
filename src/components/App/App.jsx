/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { shortDuration, statusCode, textMessage } from '../../utils/constants';

import getMoviesApi from '../../utils/MoviesApi';
import * as authApi from '../../utils/AuthApi';
import * as mainApi from '../../utils/MainApi';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesId, setSavedMoviesId] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const history = useHistory();
  const location = useLocation();

  // Функции очистки сообщений и клика по чекбоксу

  function clearAllMessages() {
    setMessageInfo('');
  }

  function handleCheckboxClick() {
    setChecked(!checked);
  }

  // Если вход выполнен, получаем данные пользователя и сохранённые фильмы.

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([mainApi.getUser(), mainApi.getSavedMovies()])
        .then(([user, userMovies]) => {
          setCurrentUser(user);
          setSavedMovies(userMovies);
          localStorage.setItem('savedMovies', JSON.stringify(userMovies));
          setSavedMoviesId(userMovies.map((movie) => movie.movieId));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 1000);
        });
    }
  }, [loggedIn]);

  // Проверка токена

  React.useEffect(() => {
    authApi
      .checkToken()
      .then(() => {
        setLoggedIn(true);
        history.push(location.pathname);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history]);

  // Сохраняем результаты поиска фильмов из локального хранилища для вкладки Фильмы

  React.useEffect(() => {
    setIsLoading(true);
    const localSearchMovies = JSON.parse(localStorage.getItem('filterMovies'));
    if (loggedIn && localSearchMovies) {
      setTimeout(() => setIsLoading(false), 1000);
      setMovies(localSearchMovies);
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, [location]);

  // Очищаем сообщения при переходах по сайту

  React.useEffect(() => {
    clearAllMessages();
  }, [location]);

  // Функция фильтрации фильмов на вкладке Фильмы

  function filterSearchMovies(keyword) {
    const localAllMovies = JSON.parse(localStorage.getItem('allMovies'));
    const filterMovies = localAllMovies.filter((movie) => {
      return (
        (movie.nameRU || '').toLowerCase().includes(keyword.toLowerCase()) ||
        (movie.nameEN || '').toLowerCase().includes(keyword.toLowerCase())
      );
    });
    if (filterMovies.length) {
      setMovies(filterMovies);
      localStorage.setItem('filterMovies', JSON.stringify(filterMovies));
      clearAllMessages();
    } else {
      setMessageInfo(`${textMessage.not_found}`);
    }
  }

  // Функция поиска фильмов из локального хранилища на вкладке Фильмы
  // Если локального хранилища нет, то отправляем запрос и сохранём в хранилище

  function searchMovies(keyword) {
    const localAllMovies = JSON.parse(localStorage.getItem('allMovies'));
    setIsLoading(true);
    if (!localAllMovies) {
      getMoviesApi()
        .then((allMovies) => {
          localStorage.setItem('allMovies', JSON.stringify(allMovies));
          filterSearchMovies(keyword);
        })
        .catch(() => {
          setMessageInfo(`${textMessage.error_api}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setTimeout(() => setIsLoading(false), 1000);
      filterSearchMovies(keyword);
    }
  }

  // Функция поиска и фильтрации фильмов на вкладке Сохранённые фильмы
  function searchSavedMovies(keyword) {
    setIsLoading(true);
    const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const filterSavedMovies = localSavedMovies.filter((movie) => {
      return (
        (movie.nameRU || '').toLowerCase().includes(keyword.toLowerCase()) ||
        (movie.nameEN || '').toLowerCase().includes(keyword.toLowerCase())
      );
    });
    if (filterSavedMovies.length) {
      clearAllMessages();
      setSavedMovies(filterSavedMovies);
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      setMessageInfo(`${textMessage.not_found}`);
      setTimeout(() => setIsLoading(false), 1000);
    }
  }

  // Функции сохранения и удаления из АПИ фильмов

  function handleLikeClick(movie) {
    mainApi
      .saveMovie(movie)
      .then((newSavedMovie) => {
        setSavedMovies([...savedMovies, newSavedMovie]);
        setSavedMoviesId([...savedMoviesId, newSavedMovie.movieId]);
        localStorage.setItem(
          'savedMovies',
          JSON.stringify([...savedMovies, newSavedMovie])
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteClick(movie) {
    const savedMovie = savedMovies.find(
      (c) => c.movieId === (movie.id || movie.movieId)
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const localSavedMovies = JSON.parse(
          localStorage.getItem('savedMovies')
        );
        const newLocalSavedMovies = localSavedMovies.filter(
          (c) => c._id !== savedMovie._id
        );
        setSavedMovies(newLocalSavedMovies);
        localStorage.setItem(
          'savedMovies',
          JSON.stringify(newLocalSavedMovies)
        );
        setSavedMoviesId((state) =>
          state.filter((id) => id !== savedMovie.movieId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Обновление профиля, логин, регистрация, выход

  function handleUpdateUser({ name, email }) {
    mainApi
      .updateUser(name, email)
      .then((user) => {
        setCurrentUser(user);
        setMessageInfo(`${textMessage.success_data}`);
      })
      .catch((err) => {
        if (err.message === `${statusCode.conflict_error}`) {
          setMessageInfo(`${textMessage.conflict_email}`);
        } else {
          setMessageInfo(`${textMessage.error_profile}`);
        }
      });
  }

  function handleLogin(email, password) {
    authApi
      .login(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        if (err.message === `${statusCode.unauthorized_error}`) {
          setMessageInfo(`${textMessage.wrong_data}`);
        } else {
          setMessageInfo(`${textMessage.error_auth}`);
        }
      });
  }

  function handleRegister(email, password, name) {
    authApi
      .register(email, password, name)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        if (err.message === `${statusCode.conflict_error}`) {
          setMessageInfo(`${textMessage.conflict_email}`);
        } else {
          setMessageInfo(`${textMessage.error_register}`);
        }
      });
  }

  function handleSignOut() {
    authApi.logout().then(() => {
      localStorage.clear();
      setMovies([]);
      setCurrentUser({});
      setLoggedIn(false);
      history.push('/');
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/" exact>
          <Main loggedIn={loggedIn} />
        </Route>

        <ProtectedRoute
          path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          movies={
            !checked
              ? movies
              : movies.filter((movie) => movie.duration <= shortDuration)
          }
          searchMovies={searchMovies}
          isSavedMovies={false}
          onLikeClick={handleLikeClick}
          onDeleteClick={handleDeleteClick}
          savedMoviesId={savedMoviesId}
          checked={checked}
          onCheckboxClick={handleCheckboxClick}
          isLoading={isLoading}
          messageInfo={messageInfo}
        />

        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          movies={
            !checked
              ? savedMovies
              : savedMovies.filter((movie) => movie.duration <= shortDuration)
          }
          searchMovies={searchSavedMovies}
          isSavedMovies
          onLikeClick={handleLikeClick}
          onDeleteClick={handleDeleteClick}
          checked={checked}
          onCheckboxClick={handleCheckboxClick}
          isLoading={isLoading}
          messageInfo={messageInfo}
        />

        <ProtectedRoute
          path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          onEditClick={handleUpdateUser}
          onSignOut={handleSignOut}
          messageInfo={messageInfo}
        />

        <Route path="/signup">
          {loggedIn && <Redirect to="/" />}
          <Register onRegister={handleRegister} messageInfo={messageInfo} />
        </Route>

        <Route path="/signin">
          {loggedIn && <Redirect to="/" />}
          <Login onLogin={handleLogin} messageInfo={messageInfo} />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
