import './AboutMe.css';
import studentPhoto from '../../../images/student_photo.jpg'

function AboutMe() {
  return (
    <section className="student">

      <div className="student__info">
        <div>
          <h3 className="student__name">Николай</h3>
          <h4 className="student__profession">Фронтенд-разработчик, 29 лет</h4>
          <p className="student__bio">
            Hello, world! Я начинающий Frontend-разработчик из Красноярска,
            мечтаю начать путешествовать и наконец-то взять баррэ на гитаре.
            В данный момент времени, заканчиваю учиться на web-разработчика в Яндекс.Практикум.
          </p>
        </div>

        <nav className="links">
          <ul className="links__list">
            <li className="links__item">
              <a className="link"
                // ССылка на Facebook требуется по макету (удалить после сдачи диплома)
                href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>

            <li className="links__item">
              <a className="link"
                href="https://github.com/nikogriffs" target="_blank" rel="noreferrer" >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

      </div>
      <img className="student__photo" src={ studentPhoto } alt="Фотография студента"/>
    </section>
  );
}

export default AboutMe;