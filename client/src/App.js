import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/AppNavbar';
import MoviesNowPlaying from './components/MoviesNowPlaying';
import MoviesPopular from './components/MoviesPopular';
import MoviesTopRated from './components/MoviesTopRated';
import MoviesUpcoming from './components/MoviesUpcoming';
import TvAiringToday from './components/TvAiringToday';
import TvOnTv from './components/TvOnTv';
import TvPopular from './components/TvPopular';
import TvTopRated from './components/TvTopRated';
import PopularPeople from './components/PopularPeople';
import SingleTvShowPage from './components/SingleTvShowPage';
import SingleMoviePage from './components/SingleMoviePage';
import SinglePersonPage from './components/SinglePersonPage';
import MovieCast from './components/MovieCast';
import TvShowCast from './components/TvShowCast';
import Home from './components/Home';
import Login from './components/Login';
import NoSearchResults from './components/NoSearchResult';
import SearchResults from './components/SearchResults';
import Register from './components/Register';
import MyList from './components/MyList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/Alerts';



const App = () => {
  return (

    <AuthState>
      <AlertState>

        <Provider store={store}>

          <Router>
            <AppNavbar />
            <Alerts />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/movies/now-playing' component={MoviesNowPlaying} />
              <Route exact path='/movies/popular' component={MoviesPopular} />
              <Route exact path='/movies/top-rated' component={MoviesTopRated} />
              <Route exact path='/movies/upcoming' component={MoviesUpcoming} />
              <Route exact path='/movies/:id' component={SingleMoviePage} />
              <Route exact path='/movies/:id/cast' component={MovieCast} />
              <Route exact path='/tv/airing-today' component={TvAiringToday} />
              <Route exact path='/tv/popular' component={TvPopular} />
              <Route exact path='/tv/on-tv' component={TvOnTv} />
              <Route exact path='/tv/top-rated' component={TvTopRated} />
              <Route exact path='/tv/:id' component={SingleTvShowPage} />
              <Route exact path='/tv/:id/cast' component={TvShowCast} />
              <Route exact path='/people/popular' component={PopularPeople} />
              <Route exact path='/people/:id' component={SinglePersonPage} />
              <Route exact path='/search' component={NoSearchResults} />
              <Route exact path='/search/:query' component={SearchResults} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/my-list' component={MyList} />

            </Switch>
          </Router>

        </Provider>

      </AlertState>
    </AuthState>
  );
}

export default App;