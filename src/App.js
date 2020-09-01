import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import NotesList from "./components/notes-list.jsx";
import EditNote from "./components/edit-note.jsx";
import CreateNote from "./components/create-note.jsx";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="container">
        {/* <Navbar />  */}
        <br />
        <Route path="/notes" exact component={CreateNote} />
        <Route path="/notes" exact component={NotesList} />
        <Route path="/notes/edit/:id" component={EditNote} />
        <Footer year={new Date().getFullYear()}/>    
      </div>
    </Router>
  );
}

export default App;
