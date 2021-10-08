import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className="footer__container">
        <p className="footer__copyright">
          &copy;&nbsp;
          {new Date().getFullYear()}
        </p>

        <nav>
          <ul className="footer__links-list links-list ">
            <li className="footer__link-item">
              <a
                className="link"
                href="https://practicum.yandex.ru"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>

            <li className="footer__link-item">
              <a
                className="link footer__link"
                href="https://github.com/nikogriffs"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>

            <li className="footer__link-item">
              <a
                className="link footer__link "
                // ССылка на Facebook требуется по макету (удалить после сдачи диплома)
                href="https://ru-ru.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
