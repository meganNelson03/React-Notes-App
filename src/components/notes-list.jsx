import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const Note = props => {
    
// };

function Note(props) {
    console.log(props);
    return (
        <div className="note">
        <h6>Title: {props.title}</h6>
        <p>Content: {props.content}</p>
        <Link to={"/edit" + props._id}>edit</Link>
        </div>
    );
}


export default class NotesList extends React.Component {
    constructor(props) {
        super(props);

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


    noteList() {
        return this.state.notes.map(note => {
            console.log("Note: ");
            console.log(note);
            return <Note title={note.title} content={note.content} />
        })
    }

    render() {
        return (
            <div className="notes-list">
                <h2>Your Notes:</h2>
                <div className="notes">
                    { this.noteList() }
                </div>
            </div>
        );
    }


}