/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import BurgerMenu from '../Burger/BurgerMenu';
import './Navigation.css';

function Navigation({ loggedIn }) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          {isMobile ? (
            <>
              <button
                className="navigation__burger-button button"
                aria-label="Open"
                type="button"
                onClick={handleClickMenu}
              />
              <BurgerMenu isOpen={isOpen} onClickMenu={handleClickMenu} />
            </>
          ) : (
            <>
              <NavLink
                to="/movies"
                className="navigation__link link"
                activeClassName="navigation__link_active">
                Фильмы
              </NavLink>

              <NavLink
                to="/saved-movies"
                className="navigation__link link"
                activeClassName="navigation__link_active">
                Сохранённые фильмы
              </NavLink>

              <Link to="/profile" className="navigation__profile-link link">
                Аккаунт
              </Link>
            </>
          )}
        </>
      ) : (
        <>
          <Link to="/signup" className="navigation__auth-link link">
            Регистрация
          </Link>

          <Link
            to="/signin"
            className="navigation__auth-link navigation__auth-link_type_login link">
            Войти
          </Link>
        </>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Navigation;
