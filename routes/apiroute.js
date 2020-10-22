const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');
let dbJASON = require("../db/db.json");

const writeFileAsync = util.promisify(fs.writeFile)

module.exports = function(aNote) {
    aNote.get("/api/notes", (req, res) => {
        res.json(dbJASON);
    });

    aNote.post("/api/notes", (req, res) => {
        let note = req.body;
        let id = uuidv4();

        note.id = id;

        dbJASON.push(note);

        writeFileAsync("./db/db.json", JSON.stringify(dbJASON)).then( () => {
            res.json(note);
        }).catch(err => console.log(err));
    })

    aNote.delete("/api/notes/:id", (req, res) => {
        let deezNotes = dbJASON.filter(note => note.id !== req.params.id)
        dbJASON = deezNotes;

        writeFileAsync("./db/db.json", JSON.stringify(dbJASON)).then( () => {
            res.json(dbJASON);
        }).catch(err => console.log(err));
    })
}