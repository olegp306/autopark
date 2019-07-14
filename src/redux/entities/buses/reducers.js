import { Map } from 'immutable'
import { FETCH_BUSES_REQUEST, IS_FETCHING, FETCHED, FETCH_FAILED } from './actions'


const initialState = Map({
    items: [],
    isFetching: false,
    fetched: false,
    error: null
})

export default busesReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_BUSES_REQUEST:
            return state.merge({isFetching: false, fetched: false, error: null})

        case IS_FETCHING:
            return state.merge({isFetching: true})

        case FETCHED:
            return state.merge({isFetching: false, fetched: true, items: [...action.payload]})

        case FETCH_FAILED:
            return state.merge({isFetching: false, error: action.payload})
        
        default: return state
    }
}
