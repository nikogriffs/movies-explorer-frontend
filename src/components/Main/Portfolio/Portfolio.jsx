import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import portfolioLink from '../../../images/portfolio_link.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio" id="student">
      <h2 className="section-title">Студент</h2>
      <AboutMe />

      <h3 className="portfolio__title">Портфолио</h3>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a
              className="portfolio__link link"
              href="https://nikogriffs.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer">
              <p className="portfolio__link-title">Статичный сайт</p>
              <img
                className="portfolio__link-icon"
                src={portfolioLink}
                alt="Иконка ссылки на портфолио"
              />
            </a>
          </li>

          <li className="portfolio__link-item">
            <a
              className="portfolio__link link"
              href="https://nikogriffs.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer">
              <p className="portfolio__link-title">Адаптивный сайт</p>
              <img
                className="portfolio__link-icon"
                src={portfolioLink}
                alt="Иконка ссылки на портфолио"
              />
            </a>
          </li>

          <li className="portfolio__link-item">
            <a
              className="portfolio__link link"
              href="https://mesto.nikogriffs.nomoredomains.monster/"
              target="_blank"
              rel="noreferrer">
              <p className="portfolio__link-title">Одностраничное приложение</p>
              <img
                className="portfolio__link-icon"
                src={portfolioLink}
                alt="Иконка ссылки на портфолио"
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
