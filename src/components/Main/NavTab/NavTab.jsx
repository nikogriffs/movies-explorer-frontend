import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <ul className="promo-links">
      <li className="promo-links__item">
        <a className="link" href="#project">
          О проекте
        </a>
      </li>
      <li className="promo-links__item">
        <a className="link" href="#techs">
          Технологии
        </a>
      </li>
      <li className="promo-links__item">
        <a className="link" href="#student">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
