import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { ADD_SONG, UPDATE_SONG, DELETE_SONG, SEARCH_SONGS } from "../actions/actions"

function searchReducer(state = [], action) {
    let newState
    switch (action.type) {
        case SEARCH_SONGS:
            newState = action.payload
            return newState
        default:
            return state

    }
}
function songsReducer(state = [], action) {
    let newState
    switch (action.type) {
        case ADD_SONG:
            debugger
            newState = state.concat(action.payload)
            return newState
        case DELETE_SONG:
            return {}
        case UPDATE_SONG:
            return {}
        default:
            return state

    }
}

const reducers = combineReducers({
    routing: routerReducer,
    searchState: searchReducer,
    songsState: songsReducer
})

export default reducers