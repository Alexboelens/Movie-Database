import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/AppNavbar';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import TvShowPage from './components/TvShowPage';
import MoviePage from './components/MoviePage';
import PersonPage from './components/PersonPage';
import People from './components/People';
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
          <Route exact path='/movies/:id' component={MoviePage} />
          <Route exact path='/tv-shows' component={TvShows} />
          <Route exact path='/tv-shows/:id' component={TvShowPage} />
          <Route exact path='/people' component={People} />
          <Route exact path='/people/:id' component={PersonPage} />
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