import { GET_ALL_TRENDING_PEOPLE } from './types';
import axios from 'axios';


export const getTrendingPeople = () => dispatch => {
    axios.get('https://api.themoviedb.org/3/trending/person/day?api_key=3c29d56bc6a6028be109cd46d895c48e')
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_PEOPLE,
                payload: res.data,
                trendingPeopleAreLoaded: true
            })
        })
}

