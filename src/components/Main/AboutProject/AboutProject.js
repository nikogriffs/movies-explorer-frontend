import './AboutProject.css'
import SectionTitle from '../SectionTitle/SectionTitle'

function AboutProject() {
  return (
    <section className="about-project">
      <SectionTitle title="О проекте"/>

      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__item-text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__item-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__item-text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
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
  )
}

export default AboutProject;