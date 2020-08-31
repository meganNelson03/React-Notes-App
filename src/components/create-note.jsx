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

        window.location = "/";     
    }


    render() {
        return (
         <div>    
            <h2>Create New Note</h2>
             <form onSubmit={this.onSubmit}>
                <label>Title:</label>
                <input 
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    type="text" 
                    required
                ></input>
                <label>Content:</label>
                <input
                    value={this.state.content} 
                    onChange={this.onChangeContent}
                    type="text" 
                    required></input>
                <button type="submit">Submit New Note</button>
            </form>
          </div>
        );
    }


}