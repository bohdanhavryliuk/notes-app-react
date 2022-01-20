import { createStore } from "redux";
import { determinationOfDates } from "./model";

const defaultState = {
    categories: ["Task", "Random Thought", "Idea"],

    notes: [{
        content: "To visit the theater on 12/8/2018",
        timeOfCreation: "31/7/2021",
        isArchivalNote: true,
        category: "Idea",
        dates: [
            "12/8/2020"
        ]
    },
    {
        content: "Walk in the woods",
        timeOfCreation: "7/9/2021",
        isArchivalNote: true,
        category: "Random Thought",
        dates: []
    },
    {
        content: "Прийом у лікаря 10/10/2021 та 17/10/2021",
        timeOfCreation: "2/10/2021",
        isArchivalNote: false,
        category: "Task",
        dates: [
            "10/10/2021",
            "17/10/2021"
        ]
    },
    {
        content: "День народження друга 18/11/2021",
        timeOfCreation: "1/11/2021",
        isArchivalNote: false,
        category: "Random Thought",
        dates: [
            "18/11/2021"
        ]
    },
    {
        content: "Зустрітись з друзями на вихідних",
        timeOfCreation: "15/12/2021",
        isArchivalNote: true,
        category: "Idea",
        dates: []
    },
    {
        content: "shopping",
        timeOfCreation: "30/12/2021",
        isArchivalNote: false,
        category: "Task",
        dates: []
    },
    {
        content: "Тренування в залі 12/1/2022",
        timeOfCreation: "2/12/2022",
        isArchivalNote: false,
        category: "Task",
        dates: [
            "12/1/2022"
        ]
    }],
};

export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

export const noteReducer = function (state = defaultState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] };
        case REMOVE_NOTE:
            return {
                ...state, notes: state.notes.filter(function (note) {
                    return note !== action.payload;
                })
            };

        case ARCHIVE_NOTE:
            return {
                ...state, notes: state.notes.map(function (note) {
                    if (note === action.payload) {
                        note.isArchivalNote = !note.isArchivalNote;
                    }
                    return note;
                })
            };

        case EDIT_NOTE:
            return {
                ...state, notes: state.notes.map(function (note) {
                    if (note === action.payload[0]) {
                        note.content = action.payload[1];
                        note.category = action.payload[2];
                        note.dates = determinationOfDates(note.content)
                    }
                    return note;
                })
            }

        default:
            return state;
    }
};

export const store = createStore(noteReducer);