import React from "react";
import axios from "axios";

export default class CreateNote extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }

        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTitle(e) {
        var val = e.target.value;
        this.setState({title: val});
    }

    onChangeContent(e) {
        var val = e.target.value;
        this.setState({content: val});
    }


    onSubmit(e) {
        e.preventDefault();

        const newNote = {
            title: this.state.title,
            content: this.state.content
        }

        console.log("Note Created: " + newNote);

        axios.post("http://localhost:5000/notes/add", newNote)
             .then(res => console.log(res.data));

        window.location = "/notes";     
    }


    render() {
        return (
         <div class="createNote">    
            <h2>Create New Note</h2>
             <form onSubmit={this.onSubmit}>
                <input 
                    placeholder="Title"
                    className="createNoteTitle"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    type="text" 
                    required
                ></input>
                <textarea
                    placeholder="Your thoughts..."
                    className="createNoteContent"
                    value={this.state.content} 
                    onChange={this.onChangeContent}
                    rows="3"
                    required></textarea>
                <div className="submit-button-container">
                    <button className="btn btn-primary btn-md submit-button" type="submit">+</button>
                </div>
                
            </form>
          </div>
        );
    }


}