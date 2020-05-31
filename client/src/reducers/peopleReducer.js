import { GET_ALL_TRENDING_PEOPLE, GET_PERSON_BY_ID } from '../actions/types';

const initialState = {
    trendingPeople: '',
    trendingPeopleAreLoaded: false,
    person: '',
    personIsLoaded: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TRENDING_PEOPLE:
            return {
                ...state,
                trendingPeople: action.payload,
                trendingPeopleAreLoaded: action.trendingPeopleAreLoaded
            }
        case GET_PERSON_BY_ID:
            return {
                ...state,
                person: action.payload,
                personIsLoaded: action.personIsLoaded
            }
        default:
            return state;
    }
}
