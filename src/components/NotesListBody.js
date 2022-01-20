import { useSelector } from "react-redux";
import NoteActiveItem from "./NoteActiveItem";
import NoteArchiveItem from "./NoteArchiveItem";

function NotesListBody({ isArchive }) {

    const notes = useSelector(function (state) {
        return state.notes;
    });

    return (
        <div className="notes-list">
            {
                !isArchive ? notes.filter(function(note) {
                    return note.isArchivalNote == isArchive
                }).map(function(note, index) {
                    return (<NoteActiveItem note={note} key={index} />)
                }) : notes.filter(function(note) {
                    return note.isArchivalNote == isArchive
                }).map(function(note, index) {
                    return (<NoteArchiveItem note={note} key={index} />)
                })
            }
        </div>
    );
}

export default NotesListBody;