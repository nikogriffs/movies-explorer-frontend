import { URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

const getMoviesApi = () => {
  return fetch(`${URL.MOVIE_API}/`, {
    method: 'GET',
  }).then(checkResponse);
};

export default getMoviesApi;
