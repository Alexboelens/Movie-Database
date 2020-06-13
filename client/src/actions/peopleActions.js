import { GET_ALL_TRENDING_PEOPLE, GET_PERSON_BY_ID, GET_POPULAR_PEOPLE } from './types';
import axios from 'axios';


export const getTrendingPeople = () => dispatch => {
    axios.get('/people/trending')
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_PEOPLE,
                payload: res.data,
                trendingPeopleAreLoaded: true
            })
        })
}

export const getPersonById = id => dispatch => {
    axios.get(`/people/${id}`)
        .then(res => {
            dispatch({
                type: GET_PERSON_BY_ID,
                payload: res.data,
                personIsLoaded: true
            })
        })
}

export const getPopularPeople = page => dispatch => {
    axios.post(`/people/popular/${page}`)
        .then(res => {
            dispatch({
                type: GET_POPULAR_PEOPLE,
                payload: res.data,
                popularLoaded: true
            })
        })
}

