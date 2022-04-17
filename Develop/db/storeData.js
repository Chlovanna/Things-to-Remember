const fs = require("fs");
const util = require("util");
const uuid = require("uuid");
const readFileData = util.promisify(fs.readFile);
const writeFileData = util.promisify(fs.writeFile);

class StoreData {
  read() {
    return readFileData("db/db.json", "utf8");
  }

  write(note) {
    return writeFileData("db/db.json", JSON.stringify(note));
  }

  
  getNotes() {
    return this.read().then((notes) => {
      let jsonNotes;
      try {
        jsonNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        jsonNotes = [];
      }
      return jsonNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("NO BLANK!");
    }
    const newNote = { title, text, id: uuidv1() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updtedNotes) => this.write(updtedNotes))
      .then(() => newNote);
  }

  removeNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filterNotes) => this.write(filterNotes));
  }
}
module.exports = new StoreData();
