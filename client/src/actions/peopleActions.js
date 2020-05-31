import { GET_ALL_TRENDING_PEOPLE, GET_PERSON_BY_ID } from './types';
import axios from 'axios';
const key = '3c29d56bc6a6028be109cd46d895c48e'


export const getTrendingPeople = () => dispatch => {
    axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=${key}`)
        .then(res => {
            dispatch({
                type: GET_ALL_TRENDING_PEOPLE,
                payload: res.data,
                trendingPeopleAreLoaded: true
            })
        })
}

export const getPersonById = id => dispatch => {
    axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
        .then(res => {
            dispatch({
                type: GET_PERSON_BY_ID,
                payload: res.data,
                personIsLoaded: true
            })
        })
}

