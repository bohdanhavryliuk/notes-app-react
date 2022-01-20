import { useSelector } from "react-redux";
import { categoriesNotesCount } from "../store/model";

function CountersTable() {
    const categories = useSelector(function (state) {
        return state.categories;
    });
    const notes = useSelector(function (state) {
        return state.notes;
    });
    return (
        <div className="categories-list">
            <div className="category-element table-header">
                <h2 className="category-name-element">Note Category</h2>
                <h2 className="active-notes-element">Active</h2>
                <h2 className="archive-notes-element">Archived</h2>
            </div>
            {
                categoriesNotesCount(categories, notes).map(function (categoryCounts, index) {
                    return (
                        <div className="category-element" key={index}>
                            <h2 className="category-name-element">{categoryCounts[0]}</h2>
                            <h2 className="active-notes-element">{categoryCounts[1]}</h2>
                            <h2 className="archive-notes-element">{categoryCounts[2]}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default CountersTable;