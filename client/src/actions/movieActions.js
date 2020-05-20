import { GET_MOVIES_BY_TITLE } from './types';
import axios from 'axios';



export const getMoviesByTitle = () => dispatch => {
    axios.get('enter url here')
        .then(res => {
            dispatch({
                type: GET_MOVIES_BY_TITLE,
                payload: res.data,
                moviesAreLoaded: true
            })
        })
}