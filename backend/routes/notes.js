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

router.route("/:id").get((req, res) => {
    Note.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/edit/:id").post((req, res) => {
    Note.findById(req.params.id)
        .then(note => {
           note.title = req.body.title;
           note.content = req.body.content;
           
           note.save()
                .then(() => {
                    res.json("Note updated!")
                })
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
})

router.route("/:id").delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json("Note deleted!");
        })
        .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;