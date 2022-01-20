export class Note {
    constructor(content, category) {
        this.content = content;
        const date = new Date();
        this.timeOfCreation = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        this.isArchivalNote = false;
        this.category = category;
        this.dates = determinationOfDates(content);
    }
}

export function determinationOfDates(content) {
    const datesList = content.match(/\d{1,2}\/\d{1,2}\/\d{4}/gm);
    return datesList ? datesList : [];
}

export function categoriesNotesCount(categories, notes) {
    const categoriesNotes = [];
    categories.forEach(function (category) {
        const categoryNotes = notes.filter(function (note) {
            return note.category == category;
        });
        categoriesNotes.push([category, categoryNotes.filter(function (note) {
            return note.isArchivalNote == false;
        }).length, categoryNotes.filter(function (note) {
            return note.isArchivalNote == true;
        }).length]);
    });
    return categoriesNotes;
}