import SectionTitle from '../SectionTitle/SectionTitle'
import './Techs.css'


function Techs() {

  return (
    <section className="techs">
      <SectionTitle title="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>


        <ul className="tech-stack">
          <li className="tech-stack__item">HTML</li>
          <li className="tech-stack__item">CSS</li>
          <li className="tech-stack__item">JS</li>
          <li className="tech-stack__item">React</li>
          <li className="tech-stack__item">Git</li>
          <li className="tech-stack__item">Express.js</li>
          <li className="tech-stack__item">MongoDB</li>
        </ul>

    </section>
  );
}

export default Techs;