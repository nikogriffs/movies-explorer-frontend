import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import './Main.css';

function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />

      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}

Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Main;
