import { useState } from "react";
import { useDispatch } from "react-redux";
import InputPanel from "./InputPanel";
import { archiveNoteAction, removeNoteAction } from "../store/actions";

function NoteActiveItem({ note }) {

    const dispatch = useDispatch();

    const [modalState, setState] = useState(false);

    const removeNote = function () {
        dispatch(removeNoteAction(note));
    }

    const archiveNote = function () {
        dispatch(archiveNoteAction(note));
    }

    return (
        <div className="note-element">
            <p className="note-content">{note.content}</p>
            <p className="note-category">{note.category}</p>
            <h6 className="note-date">{note.timeOfCreation}</h6>
            <div className="note-dates">
                {note.dates.map(function (date, index) {
                    return (<h6 key={index}>{date}</h6>)
                })}
            </div>
            <div className="note-buttons">
                <button className="btn-edit" onClick={function() {
                    return setState(!modalState)
                }}>🖉</button>
                <button className="activate-note" onClick={archiveNote}>📥</button>
                <button className="btn-delete" onClick={removeNote}>🗑</button>
            </div>
            {modalState ? (<InputPanel closePanel={setState} note={note}/>) : (<></>)}
        </div>
    )
}

export default NoteActiveItem;