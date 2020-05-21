import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import peopleReducer from './peopleReducer';
import tvShowReducer from './tvShowReducer'


export default combineReducers({
    movies: movieReducer,
    tvShows: tvShowReducer,
    people: peopleReducer
})