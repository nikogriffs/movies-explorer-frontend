import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import Portfolio from './Portfolio/Portfolio'
import './Main.css';

function Main() {

  return (
    <main className="landing-page">
      <Promo />
      <AboutProject />
      <Techs />
      <Portfolio />

    </main>
  );

}

export default Main;