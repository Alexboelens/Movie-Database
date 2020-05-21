import { GET_ALL_TRENDING_PEOPLE } from '../actions/types';

const initialState = {
    trendingPeople: '',
    trendingPeopleAreLoaded: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TRENDING_PEOPLE:
            return {
                ...state,
                trendingPeople: action.payload,
                trendingPeopleAreLoaded: action.trendingPeopleAreLoaded
            }
        default:
            return state;
    }
}
