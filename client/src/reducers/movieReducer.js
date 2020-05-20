import { GET_MOVIES_BY_TITLE } from '../actions/types';

const initialState = {
    movies: '',
    moviesAreLoaded: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES_BY_TITLE:
            return {
                ...state,
                movies: action.payload,
                moviesAreLoaded: action.moviesAreLoaded
            }
        default:
            return state;
    }
}
