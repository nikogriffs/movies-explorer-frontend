import React from 'react';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/Validation';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn, onSignOut, onEditClick, messageInfo }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid } = useFormWithValidation();

  React.useEffect(() => {
    values.email = currentUser.email;
    values.name = currentUser.name;
  }, [currentUser]);

  function handleProfile(e) {
    e.preventDefault();
    onEditClick({ email: values.email, name: values.name });
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <legend className="profile__title">
              Привет, {currentUser.name}!
            </legend>

            <label htmlFor="name" className="profile__label">
              Имя
              <input
                pattern="^[a-zA-Zа-яА-ЯЁё\\ \\-]+$"
                value={values.name || currentUser.name || ''}
                onChange={handleChange}
                className="profile__input"
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                required
                minLength={2}
                maxLength={30}
              />
            </label>
            <span className="profile__error">{errors.name}</span>
            <label htmlFor="email" className="profile__label">
              E-mail
              <input
                pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
                value={values.email || currentUser.email || ''}
                onChange={handleChange}
                className="profile__input"
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                required
              />
            </label>
            <span className="profile__error">{errors.email}</span>
            <span className="profile__message">{messageInfo}</span>
          </fieldset>

          <div className="profile__button-container">
            <button
              type="submit"
              className={`profile__button button ${
                (!isValid ||
                  (values.email === currentUser.email &&
                    values.name === currentUser.name)) &&
                'button_disabled'
              }`}
              onClick={handleProfile}>
              Редактировать
            </button>
            <button
              type="button"
              className="profile__button profile__button_type_signout button"
              onClick={onSignOut}>
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
  onSignOut: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  messageInfo: PropTypes.string.isRequired,
};

export default Profile;
