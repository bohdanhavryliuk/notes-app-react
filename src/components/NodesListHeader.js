import React from "react";

function NodesListHeader({ isArchive, changeActive }) {
    return (
        <div className="note-columns">
            <p className="note-content">Content</p>
            <p className="note-category">Category</p>
            <p className="note-date">Created</p>
            {!isArchive ? (
                <>
                    <p className="note-dates">Dates</p>
                </>
            ) : (
                <></>
            )

            }
            <button className="active-archive-btn" onClick={function () {
                return changeActive(!isArchive);
            }}>{isArchive ? "Active Notes" : "Archive Notes"}</button>
        </div>
    );
}

export default NodesListHeader;