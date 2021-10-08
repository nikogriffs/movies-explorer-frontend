import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import './BurgerMenu.css';

function Burger({ isOpen, onClickMenu }) {
  function handleClickMenu() {
    onClickMenu(!isOpen);
  }

  return (
    <>
      <div className={`burger-menu ${isOpen ? 'burger-menu_active' : ''}`}>

        <nav className={`burger-menu__sidebar ${isOpen ? 'burger-menu__sidebar_active' : ''}`}>
          <div className="burger-menu__container">
            <NavLink
              exact
              to="/"
              className="burger-menu__link link"
              activeClassName="burger-menu__link_active"
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className="burger-menu__link link"
              activeClassName="burger-menu__link_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="burger-menu__link link"
              activeClassName="burger-menu__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>

          <Link
            to="/profile"
            className="burger-menu__profile-link link"
          >
            Аккаунт
          </Link>
          <button
            onClick={handleClickMenu}
            aria-label="Close"
            type="button"
            className="burger-menu__button-close button"
          />
        </nav>
      </div>

    </>
  );
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickMenu: PropTypes.func.isRequired,
};

export default Burger;
