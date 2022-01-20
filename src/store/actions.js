import { ADD_NOTE, ARCHIVE_NOTE, EDIT_NOTE, REMOVE_NOTE } from "./noteReducer";

export function addNoteAction(payload) {
    return {
        type: ADD_NOTE,
        payload
    }
}

export function removeNoteAction(payload) {
    return {
        type: REMOVE_NOTE,
        payload
    }
}

export function editNoteAction(payload) {
    return {
        type: EDIT_NOTE,
        payload
    }
}

export function archiveNoteAction(payload) {
    return {
        type: ARCHIVE_NOTE,
        payload
    }
}