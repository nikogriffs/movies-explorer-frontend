import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="section-title techs__section-title">Технологии</h2>

      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>

      <ul className="tech-stack">
        <li className="tech-stack__item">HTML</li>
        <li className="tech-stack__item">CSS</li>
        <li className="tech-stack__item">JS</li>
        <li className="tech-stack__item">React</li>
        <li className="tech-stack__item">Git</li>
        <li className="tech-stack__item">Express.js</li>
        <li className="tech-stack__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
