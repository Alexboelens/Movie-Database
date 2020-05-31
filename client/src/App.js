import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/AppNavbar';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import People from './components/People';
import SingleTvShowPage from './components/SingleTvShowPage';
import SingleMoviePage from './components/SingleMoviePage';
import SinglePersonPage from './components/SinglePersonPage';
import MovieCast from './components/MovieCast';
import TvShowCast from './components/TvShowCast';
import Home from './components/Home';
import Login from './components/Login';
import NoSearchResults from './components/NoSearchResult';
import SearchResults from './components/SearchResults';
import CreateAccount from './components/CreateAccount';
import MyList from './components/MyList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={Movies} />
          <Route exact path='/movies/:id' component={SingleMoviePage} />
          <Route exact path='/movies/:id/cast' component={MovieCast} />
          <Route exact path='/tv' component={TvShows} />
          <Route exact path='/tv/:id' component={SingleTvShowPage} />
          <Route exact path='/tv/:id/cast' component={TvShowCast} />
          <Route exact path='/people' component={People} />
          <Route exact path='/people/:id' component={SinglePersonPage} />
          <Route exact path='/search' component={NoSearchResults} />
          <Route exact path='/search/:query' component={SearchResults} />



          <Route exact path='/login' component={Login} />
          <Route exact path='/create-account' component={CreateAccount} />
          <Route exact path='/my-list' component={MyList} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;