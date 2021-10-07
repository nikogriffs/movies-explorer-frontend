import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn }) {
  const currentName = 'Николай';
  const [name, setName] = React.useState('Николай');
  const [email, setEmail] = React.useState('nikogriffs@yandex.ru');
  const history = useHistory();

  function handleUpdateName(e) {
    setName(e.target.value);
  }

  function handleUpdateEmail(e) {
    setEmail(e.target.value);
  }

  function handleSignOut() {
    history.push('/signin');
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">

        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <legend className="profile__title">
              Привет,&nbsp;
              {currentName}
              !
            </legend>

            <label htmlFor="name" className="profile__label">
              Имя
              <input
                value={name}
                onChange={handleUpdateName}
                className="profile__input"
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                required
                minLength={2}
                maxLength={40}
              />
            </label>

            <label htmlFor="email" className="profile__label">
              E-mail
              <input
                value={email}
                onChange={handleUpdateEmail}
                className="profile__input"
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                required
              />
            </label>

          </fieldset>

          <div className="profile__button-container">
            <button type="button" className="profile__button button">Редактировать</button>
            <button
              type="button"
              className="profile__button profile__button_type_signout button"
              onClick={handleSignOut}
            >
              Выйти из профиля
            </button>
          </div>

        </form>
      </main>
    </>

  );
}

Profile.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Profile;
