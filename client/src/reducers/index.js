import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import peopleReducer from './peopleReducer';
import tvShowReducer from './tvShowReducer';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';


export default combineReducers({
    movies: movieReducer,
    tvShows: tvShowReducer,
    people: peopleReducer,
    search: searchReducer
})