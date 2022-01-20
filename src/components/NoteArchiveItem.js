import { useDispatch } from "react-redux";
import { archiveNoteAction } from "../store/actions";

function NoteArchiveItem({ note }) {
    const dispatch = useDispatch();
    const activeNote = function () {
        dispatch(archiveNoteAction(note));
    }
    return (
        <div className="note-element archive-element">
            <p className="note-content">{note.content}</p>
            <p className="note-category">{note.category}</p>
            <h6 className="note-date">{note.timeOfCreation}</h6>
            <div className="note-buttons">
                <button className="activate-note" onClick={activeNote}>📤</button>
            </div>
        </div>
    )
}

export default NoteArchiveItem;