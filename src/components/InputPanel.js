import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNoteAction, editNoteAction } from "../store/actions";
import { Note } from "../store/model";

function InputPanel({ closePanel, note }) {

    const [valueInputState, setValueInput] = useState(note ? note.content : "");
    const [valueSelectState, setSelectInput] = useState(note ? note.category : "Task");

    const dispatch = useDispatch();

    const categories = useSelector(function (state) {
        return state.categories;
    });

    const addNote = function () {
        if (valueInputState) {
            dispatch(addNoteAction(new Note(valueInputState, valueSelectState)))
            closePanel(false);
        }
    }

    const editNote = function () {
        if (valueInputState && (valueInputState !== note.content || valueSelectState !== note.category)) {
            dispatch(editNoteAction([note, valueInputState, valueSelectState]));
            closePanel(false);
        }
    }


    return (
        <>
            <div className="modal-overlay">
                <div className="modal-window">
                    <div className="close-btn-placement">
                        <button className="close-modal-btn" onClick={function () {
                            return closePanel(false);
                        }}>&#10006;</button>
                    </div>
                    <textarea className="input-content" value={valueInputState} onChange={function (event) {
                        return setValueInput(event.target.value);
                    }}></textarea>
                    <select value={valueSelectState} onChange={function (event) {
                        return setSelectInput(event.target.value);
                    }}>
                        <option disabled>Category</option>
                        {categories.map(function (category, index) {
                            return (<option key={index}>{category}</option>)
                        })}
                    </select>
                    {
                        note ? (
                            <button className="note-btn" onClick={editNote}>Edit</button>
                        ) : (
                            <button className="note-btn" onClick={addNote}>Add</button>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default InputPanel;