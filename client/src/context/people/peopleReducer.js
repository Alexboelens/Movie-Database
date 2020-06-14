import {
    GET_ALL_TRENDING_PEOPLE,
    GET_PERSON_BY_ID,
    GET_POPULAR_PEOPLE
} from '../types';


export default (state, action) => {
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
        case GET_POPULAR_PEOPLE:
            return {
                ...state,
                popularPeople: action.payload,
                popularLoaded: action.popularLoaded
            }
        default:
            return state;
    }
};
