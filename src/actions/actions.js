export const ADD_SONG = "ADD_SONG"
export const DELETE_SONG = "DELETE_SONG"
export const UPDATE_SONG = "UPDATE_SONG"
export const SEARCH_SONGS = "SEARCH_SONGS"

export function addSong(song) {
    return { type: ADD_SONG, payload: song}
}
export function deleteSong(song) {
    return { type: DELETE_SONG, payload: song}
}
export function updateSong(song) {
    return { type: UPDATE_SONG, payload: song}
}
export function searchSongs(songs) {
    return { type: SEARCH_SONGS, payload: songs}
}