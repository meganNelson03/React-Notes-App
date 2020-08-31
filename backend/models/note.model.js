import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: new Date()
});

const Note = mongoose.model("Note", noteSchema);

export default Note;