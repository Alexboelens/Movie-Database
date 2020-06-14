import React, { useReducer } from 'react';
import FavoriteContext from './favoriteContext';
import favoriteReducer from './favoriteReducer';
import axios from 'axios';
import {
    ADD_FAVORITE,
    DELETE_FAVORITE,
    GET_FAVORITES,
    ADD_FAVORITE_FAIL,
    GET_FAVORITE_FAIL,
    DELETE_FAVORITE_FAIL
} from '../types';


const FavoriteState = props => {
    const initialState = {
        favorites: '',
        favoritesLoaded: false,
        error: null
    }

    const [state, dispatch] = useReducer(favoriteReducer, initialState);

    const addFavorite = async data => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token')
            }
        }

        try {
            const res = await axios.post('/api/favorites', data, config);

            dispatch({
                type: ADD_FAVORITE,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: ADD_FAVORITE_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    const getFavorites = async () => {
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        }
        try {
            const res = await axios.get('/api/favorites', config);

            dispatch({
                type: GET_FAVORITES,
                payload: res.data,
                favoritesLoaded: true
            })
        } catch (err) {
            dispatch({
                type: GET_FAVORITE_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    const deleteFavorite = async id => {
        try {
            const config = {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            }
            const res = await axios.delete(`/api/favorites/${id}`, config);

            dispatch({
                type: DELETE_FAVORITE,
                payload: res.data,
                favoritesLoaded: false
            })
        } catch (err) {
            dispatch({
                type: DELETE_FAVORITE_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    return (
        <FavoriteContext.Provider value={{
            favorites: state.favorites,
            favoritesLoaded: state.favoritesLoaded,
            getFavorites,
            deleteFavorite,
            addFavorite
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteState;