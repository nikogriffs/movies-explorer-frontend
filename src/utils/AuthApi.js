import { URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export const register = (email, password, name) => {
  return fetch(`${URL.MAIN_API}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const login = (email, password) => {
  return fetch(`${URL.MAIN_API}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const checkToken = () => {
  return fetch(`${URL.MAIN_API}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(checkResponse);
};

export const logout = () => {
  return fetch(`${URL.MAIN_API}/signout`, {
    method: 'POST',
    credentials: 'include',
  }).then(checkResponse);
};
