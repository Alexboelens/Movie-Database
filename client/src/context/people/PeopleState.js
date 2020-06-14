import React, { useReducer } from 'react';
import axios from 'axios';
import PeopleContext from './peopleContext';
import peopleReducer from './peopleReducer';
import {
    GET_ALL_TRENDING_PEOPLE,
    GET_PERSON_BY_ID,
    GET_POPULAR_PEOPLE
} from '../types';


const PeopleState = props => {
    const initialState = {
        trendingPeople: '',
        trendingPeopleAreLoaded: false,
        person: '',
        personIsLoaded: false,
        popularPeople: '',
        popularLoaded: false
    }

    const [state, dispatch] = useReducer(peopleReducer, initialState);

    const getTrendingPeople = async () => {
        try {
            const res = await axios.get('/people/trending');

            dispatch({
                type: GET_ALL_TRENDING_PEOPLE,
                payload: res.data,
                trendingPeopleAreLoaded: true
            });
        } catch (err) {
            console.log(err);
        }
    }

    const getPersonById = async id => {
        try {
            const res = await axios.get(`/people/${id}`);

            dispatch({
                type: GET_PERSON_BY_ID,
                payload: res.data,
                personIsLoaded: true
            });
        } catch (err) {
            console.log(err);
        }
    };

    const getPopularPeople = async page => {
        try {
            const res = await axios.post(`/people/popular/${page}`);

            dispatch({
                type: GET_POPULAR_PEOPLE,
                payload: res.data,
                popularLoaded: true
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <PeopleContext.Provider value={{
            trendingPeople: state.trendingPeople,
            trendingPeopleAreLoaded: state.trendingPeopleAreLoaded,
            person: state.person,
            personIsLoaded: state.personIsLoaded,
            popularPeople: state.popularPeople,
            popularLoaded: state.popularLoaded,
            getTrendingPeople,
            getPersonById,
            getPopularPeople
        }}>
            {props.children}
        </PeopleContext.Provider>
    )
}

export default PeopleState;