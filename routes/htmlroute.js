const path = require("path");

module.exports = function(aNote) {
    aNote.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    aNote.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
    })
}
