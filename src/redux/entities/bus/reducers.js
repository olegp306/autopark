import { Map } from 'immutable'
import { UPDATE_BUS_REQUEST, IS_UPDATING_BUS, UPDATED_BUS, UPDATE_BUS_FAILED, } from "./actions"
import { ADD_BUS_REQUEST, IS_ADDING_BUS, ADDED_BUS, ADDING_BUS_FAILED } from './actions'

const initialState = Map({
    item: null,
    isUpdating: false,
    updated: false,
    isAdding: false,
    added: false,
    error: null
})

export default busReducer = (state = initialState, action) => {
    switch (action.type){
        
        case UPDATE_BUS_REQUEST:
            return initialState

        case IS_UPDATING_BUS:
            return state.merge({ isUpdating: true })

        case UPDATED_BUS:
            return state.merge({ isUpdating: false, updated: true })

        case UPDATE_BUS_FAILED:
            return state.merge({ isUpdating: false, error: action.payload })    


        case ADD_BUS_REQUEST:
            return initialState

        case IS_ADDING_BUS:
            return state.merge({ isAdding: true })

        case ADDED_BUS:
            return state.merge({ isAdding: false, added: true })

        case ADDING_BUS_FAILED:
            return state.merge({ isAdding: false, error: action.payload })
            

        default: return state
    }
}
