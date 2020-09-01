import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Note(props) {
    return (
        <div className="note">
            <h5 className="note-title">{props.title}</h5>
            <hr></hr>
            <p className="note-content">{props.content}</p>
            <hr></hr>
            <div className="note-link-container"><Link to={"/notes/edit/" + props.id}>edit</Link> | <a href="#" onClick={() => props.deleteNote(props.id)}>delete</a></div>
        </div>
    );
}


export default class NotesList extends React.Component {
    constructor(props) {
        super(props);

        this.deleteNote = this.deleteNote.bind(this);

        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/notes/")
             .then(res => {
                 this.setState({notes: res.data})
             })
             .catch(err => console.log(err));
    }

    deleteNote(noteID) {
        axios.delete("http://localhost:5000/notes/" + noteID)
            .then(res => {console.log(res.data)});

        this.setState({
            notes: this.state.notes.filter(note => note._id !== noteID)
        });
    }

    noteList() {
        return this.state.notes.map(note => {
            return <Note key={note._id} id={note._id} title={note.title} content={note.content} deleteNote={this.deleteNote}/>
        })
    }

    render() {
        return (
            <div className="notes-list">
                <div className="notes">
                    { this.noteList() }
                </div>
            </div>
        );
    }


}