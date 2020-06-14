import {
    ADD_FAVORITE,
    DELETE_FAVORITE,
    GET_FAVORITES,
    ADD_FAVORITE_FAIL,
    GET_FAVORITE_FAIL,
    DELETE_FAVORITE_FAIL
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                payload: action.payload
            }
        case GET_FAVORITES:
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: action.payload,
                favoritesLoaded: action.favoritesLoaded
            }
        case ADD_FAVORITE_FAIL:
        case GET_FAVORITE_FAIL:
        case DELETE_FAVORITE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}