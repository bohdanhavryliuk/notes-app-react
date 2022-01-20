import { useState } from "react";
import NotesListBody from "./NotesListBody";
import NodesListHeader from "./NodesListHeader";

function NotesTable() {

    const [state, setState] = useState(false);
    
    return (
        <div>
            <NodesListHeader isArchive={state} changeActive={setState}/>
            <NotesListBody isArchive={state}/>
        </div>
    );
}

export default NotesTable;