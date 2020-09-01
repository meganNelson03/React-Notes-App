import React from "react";
import axios from "axios";

export default class EditNote extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            title: "",
            content: ""
        }
    }

    componentDidMount() {
    
        axios.get('http://localhost:5000/notes/' + this.props.match.params.id)
          .then(response => {
              console.log(response.data);
            return this.setState({
              title: response.data.title,
              content: response.data.content
            });   
          })
          .catch(function (error) {
            console.log(error);
          })

    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const editedNote = {
            title: this.state.title,
            content: this.state.content
        }

        axios.post("http://localhost:5000/notes/edit/" + this.props.match.params.id, editedNote)
            .then(res => console.log(res.data));

        window.location = "/notes"    

    }

    render() {
        return (
            <div className="editNote">
                <h2>Edit Note:</h2>
                <form onSubmit={this.onSubmit}>
                    <label>Title:</label>
                    <input
                        name="title"
                        type="text"
                        onChange={this.handleTitleChange}
                        value={this.props.title}
                        required
                    ></input>
                    <label>Content:</label>
                    <input
                        name="content"
                        type="text"
                        onChange={this.handleContentChange}
                        value={this.props.content}
                        required
                    ></input>
                    <button type="submit">Submit Changes</button>
                </form>
            </div>
        );
    }


}