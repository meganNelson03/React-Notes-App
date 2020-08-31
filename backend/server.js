require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI, {useNewUrlParser: true, useCreateIndex: true});

const notesRouter = require("./routes/notes.js");
app.use("/notes", notesRouter);

app.listen(port, () => {
    console.log("Listening at " + port + "...");
});

