import { movieFetch, movieLoad, movieErr, singleMovieFetch } from '../ActionTypes'


const initialState = {
    movies: [],
    loading: false,
    error: false,
    singleMovie: {}
}

export const movieReducer = (state = initialState , action) => {
    switch (action.type) {
        case movieFetch:
            return {
                ...state,
                movies: action.payload
            } 
        case singleMovieFetch:
            return {
                ...state,
                singleMovie: action.payload
            } 
        case movieLoad:
            return {
                ...state,
                loading: action.payload
            } 
        case movieErr:
            return {
                ...state,
                error: action.payload
            } 
        default:
            return state
    }
}