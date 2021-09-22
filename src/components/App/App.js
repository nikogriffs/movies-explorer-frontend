// import React from 'react'
import { Switch, Route } from 'react-router-dom';
// import Header from '../Header/Header';
import Main from '../Main/Main';
// import Movies from '../Main/Main';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import Profile from '../Profile/Profile';
// import Footer from '../Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="page">
      {/* <Header /> */}

      <Switch>

        <Route>
          <Main exact path="/" />
        </Route>



        {/* <Route>
          <Movies path="/movies" />
        </Route> */}

        {/* <Route>
          <SavedMovies path="/saved-movies" />
        </Route>

        <Route>
          <Register path="/signup" />
        </Route>

        <Route>
          <Login path="/signin" />
        </Route>

        <Route>
          <Profile path="/profile" />
        </Route> */}

      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
