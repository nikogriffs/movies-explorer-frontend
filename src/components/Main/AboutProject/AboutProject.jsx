import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id="project" className="project">
      <h2 className="section-title">О проекте</h2>
      <ul className="project__list">
        <li className="project__item project-item">
          <h3 className="project-item__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project-item__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>

        <li className="project__item project-item">
          <h3 className="project-item__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project-item__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="timeline-bar">
        <div className="timeline-bar__backend">1 неделя</div>
        <div className="timeline-bar__frontend">4 недели</div>
        <span className="timeline-bar__tag">Back-end</span>
        <span className="timeline-bar__tag">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
