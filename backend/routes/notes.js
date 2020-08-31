const router = require("express").Router();
const Note = require("../models/note.model.js");

router.route("/").get((req, res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json("Error: " + err));
});


router.route("/add").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    const newNote = new Note({
        title: req.body.title,
        content: req.body.content
    });

    newNote.save()
           .then(() => {
               return res.json("Note added!");
            })
           .catch((err) => res.status(400).json("Error: " + err));
    
});


module.exports = router;