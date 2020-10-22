const express = require("express");
const aNote = express();

const PORT = process.env.PORT || 3000;

aNote.use(express.urlencoded({ extended: true }));
aNote.use(express.json());

aNote.use(express.static("public"))

require("./routes/apiroute")(aNote);
require("./routes/htmlroute")(aNote);

aNote.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
});