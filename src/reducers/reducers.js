import { combineReducers } from "redux"
import { ADD_SONG, UPDATE_SONG, DELETE_SONG, SEARCH_SONGS } from "../actions/actions"

function songReducer(state = [], action) {
    switch (action.type) {
        case ADD_SONG:
            return Object.assign({}, state, action.payload)
        case DELETE_SONG:
            return {}
        case UPDATE_SONG:
            return {}
        case SEARCH_SONGS:
            let newState = action.payload
            return newState
        default:
            return state

    }
}

const reducers = combineReducers({
    songsState: songReducer
})

export default reducers