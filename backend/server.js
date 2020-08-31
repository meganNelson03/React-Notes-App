require("dotenv").config();

import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5000;


app.use(cors());

mongoose.connect(process.env.URI, {useNewUrlParser: true, useCreateIndex: true});

app.listen(port, () => {
    console.log("Listening at " + port + "...");
});

app.use("/notes", notesRouter);