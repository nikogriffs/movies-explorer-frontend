import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutMe from '../AboutMe/AboutMe';
import portfolioLink from '../../../images/portfolio_link.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <SectionTitle title="Студент" />
      <AboutMe />
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio-links">
        <ul className="portfolio-links__list">
          <li className="portfolio-links__item">
            <a
              className="portfolio-link"
              href="https://nikogriffs.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio-link__name">Статичный сайт</p>
              <img className="portfolio-link__image" src={portfolioLink} alt="Иконка ссылки на портфолио" />
            </a>
          </li>
          <li className="portfolio-links__item">
            <a
              className="portfolio-link"
              href="https://nikogriffs.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio-link__name">Адаптивный сайт</p>
              <img className="portfolio-link__image" src={portfolioLink} alt="Иконка ссылки на портфолио" />
            </a>
          </li>
          <li className="portfolio-links__item">
            <a
              className="portfolio-link"
              href="https://mesto.nikogriffs.nomoredomains.monster/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio-link__name">Одностраничное приложение</p>
              <img src={portfolioLink} alt="Иконка ссылки на портфолио" />
            </a>
          </li>
        </ul>
      </nav>
    </section>

  );
}

export default Portfolio;
