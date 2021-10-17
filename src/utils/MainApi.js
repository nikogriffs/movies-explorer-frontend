import { URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export const getUser = () => {
  return fetch(`${URL.MAIN_API}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(checkResponse);
};

export const updateUser = (name, email) => {
  return fetch(`${URL.MAIN_API}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  }).then(checkResponse);
};

export const getSavedMovies = () => {
  return fetch(`${URL.MAIN_API}/movies`, {
    method: 'GET',
    credentials: 'include',
  }).then(checkResponse);
};

export const saveMovie = (movie) => {
  return fetch(`${URL.MAIN_API}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: movie.country || 'null',
      director: movie.director || 'null',
      duration: movie.duration || 'null',
      year: movie.year || null,
      description: movie.description || 'null',
      image: `${URL.BASE_URL}${movie.image.url}` || 'null',
      // eslint-disable-next-line no-nested-ternary
      trailer: movie.trailerLink
        ? movie.trailerLink.startsWith('https')
          ? movie.trailerLink
          : `${URL.YOUTUBE_URL}`
        : `${URL.YOUTUBE_URL}`,
      thumbnail:
        `${URL.BASE_URL}${movie.image.formats.thumbnail.url}` || 'null',
      movieId: movie.id || 'null',
      nameRU: movie.nameRU || 'null',
      nameEN: movie.nameEN || 'null',
    }),
  }).then(checkResponse);
};

export const deleteMovie = (movieId) => {
  return fetch(`${URL.MAIN_API}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then(checkResponse);
};
